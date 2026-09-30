import { filterProducts, formatPrice, products } from "./products.js";
import "./styles.css";

const key = "myntra-ai-stylist-demo-v1";
const defaults = { view: "discover", query: "", category: "All", maxPrice: 5000, sort: "match", favorites: [], bag: [], paused: false, activityOpen: false, memory: true, profile: { size: "M", palette: "Jewel tones", budget: "5000" } };

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (!saved || typeof saved !== "object") return { ...defaults };
    return { ...defaults, ...saved, favorites: Array.isArray(saved.favorites) ? saved.favorites : [], bag: Array.isArray(saved.bag) ? saved.bag : [], profile: { ...defaults.profile, ...saved.profile } };
  } catch {
    return { ...defaults };
  }
}

const state = loadState();
const grid = document.querySelector("#product-grid");
const queryInput = document.querySelector("#query-input");
let toastTimer;

function persist() {
  try { localStorage.setItem(key, JSON.stringify(state)); } catch { showToast("This browser could not save the demo state."); }
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2500);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function renderNavigation() {
  document.querySelector("#discover-view").hidden = state.view !== "discover";
  document.querySelector("#missions-view").hidden = state.view !== "missions";
  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle("is-active", active);
    if (button.matches(".nav-link, .mobile-nav-link")) active ? button.setAttribute("aria-current", "page") : button.removeAttribute("aria-current");
  });
}

function card(product, index) {
  const saved = state.favorites.includes(product.id);
  const inBag = state.bag.includes(product.id);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  return `<article class="product-card" style="--card-index:${index}"><div class="product-photo"><img src="${product.image}" alt="${escapeHtml(`${product.brand} ${product.name}`)}" loading="${index < 2 ? "eager" : "lazy"}" /><span class="match-badge">✳ ${product.match}% match</span><button class="favorite-button ${saved ? "is-saved" : ""}" type="button" data-favorite="${product.id}" aria-pressed="${saved}" aria-label="${saved ? "Remove from" : "Add to"} saved styles">${saved ? "♥" : "♡"}</button><span class="rating-badge">★ ${product.rating} <i>·</i> ${product.reviews ?? ""}</span></div><div class="product-info"><div class="product-brand-row"><strong>${escapeHtml(product.brand)}</strong><span>${product.category}</span></div><h3>${escapeHtml(product.name)}</h3><p class="match-reason">✳ ${escapeHtml(product.note)}</p><div class="product-price"><strong>₹${formatPrice(product.price)}</strong><del>₹${formatPrice(product.originalPrice)}</del><span>${discount}% OFF</span></div><button class="add-button ${inBag ? "is-added" : ""}" type="button" data-add="${product.id}"><span>${inBag ? "✓" : "+"}</span> ${inBag ? "Added to bag" : "Add to bag"}</button></div></article>`;
}

function renderProducts() {
  const filtered = filterProducts(products, state);
  const sorted = [...filtered].sort((a, b) => state.sort === "price-asc" ? a.price - b.price : state.sort === "price-desc" ? b.price - a.price : b.match - a.match);
  document.querySelector("#result-count").textContent = `${sorted.length} ${sorted.length === 1 ? "style" : "styles"}`;
  document.querySelector("#empty-state").hidden = sorted.length > 0;
  grid.hidden = sorted.length === 0;
  grid.innerHTML = sorted.map(card).join("");
  grid.querySelectorAll(".product-photo img").forEach((image) => image.addEventListener("error", () => image.closest(".product-photo").classList.add("image-unavailable"), { once: true }));
  document.querySelectorAll("[data-category]").forEach((button) => {
    const active = button.dataset.category === state.category;
    button.classList.toggle("is-selected", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const budgetButton = document.querySelector("[data-budget]");
  budgetButton.classList.toggle("is-selected", state.maxPrice === Number(budgetButton.dataset.budget));
  document.querySelector("#sort-select").value = state.sort;
  const hasFilters = Boolean(state.query || state.category !== "All" || state.maxPrice !== 5000);
  const activeQuery = document.querySelector("#active-query");
  activeQuery.hidden = !hasFilters;
  activeQuery.innerHTML = hasFilters ? `<span>Showing ${state.query ? `“${escapeHtml(state.query)}”` : "your edit"}${state.maxPrice ? ` · under ₹${formatPrice(state.maxPrice)}` : ""}${state.category !== "All" ? ` · ${escapeHtml(state.category)}` : ""}</span><button type="button" data-clear-filters>Clear all <span>×</span></button>` : "";
}

function renderProfile() {
  const budget = formatPrice(Number(state.profile.budget));
  document.querySelector("#profile-summary").textContent = `Size ${state.profile.size} · ${state.profile.palette} · View or edit`;
  document.querySelector("#palette-summary").textContent = state.profile.palette;
  document.querySelector("#size-summary").textContent = state.profile.size;
  document.querySelector("#budget-summary").textContent = `₹${budget}`;
  document.querySelector("[data-profile-size]").textContent = state.profile.size;
  document.querySelector("[data-profile-palette]").textContent = state.profile.palette;
  document.querySelector("[data-profile-budget]").textContent = budget;
}

function renderMission() {
  document.querySelector("#mission-status-text").textContent = state.paused ? "Paused · ready when you are" : "Ready for your review";
  document.querySelector(".pause-button").innerHTML = state.paused ? "▶ Resume mission" : "Ⅱ Pause mission";
  document.querySelector(".pause-button").dataset.pauseMission = state.paused ? "resume" : "pause";
  document.querySelector("#mission-progress-bar").style.width = state.paused ? "68%" : "100%";
  document.querySelector("#activity-log").hidden = !state.activityOpen;
  const activityButton = document.querySelector("[data-toggle-activity]");
  activityButton.setAttribute("aria-expanded", String(state.activityOpen));
  activityButton.innerHTML = state.activityOpen ? "Hide activity ⌃" : "View activity ⌄";
  document.querySelector("#memory-toggle").checked = state.memory;
  document.querySelector("#dialog-memory-toggle").checked = state.memory;
}

function render() {
  renderNavigation();
  renderProducts();
  renderProfile();
  renderMission();
  const count = state.bag.length;
  document.querySelector("#bag-count").textContent = count;
  document.querySelector(".bag-button").setAttribute("aria-label", `Shopping bag, ${count} ${count === 1 ? "item" : "items"}`);
  queryInput.value = state.query;
  persist();
}

function openProfile() {
  document.querySelector("#size-select").value = state.profile.size;
  document.querySelector("#palette-select").value = state.profile.palette;
  document.querySelector("#budget-select").value = state.profile.budget;
  document.querySelector("#dialog-memory-toggle").checked = state.memory;
  document.querySelector("#profile-dialog").showModal();
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    state.view = viewButton.dataset.view;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (event.target.closest("[data-open-profile]")) { openProfile(); return; }
  if (event.target.closest("[data-close-profile]")) { document.querySelector("#profile-dialog").close(); return; }
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) { state.category = categoryButton.dataset.category; renderProducts(); persist(); return; }
  const budgetButton = event.target.closest("[data-budget]");
  if (budgetButton) { state.maxPrice = state.maxPrice === Number(budgetButton.dataset.budget) ? null : Number(budgetButton.dataset.budget); renderProducts(); persist(); return; }
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    state.favorites = state.favorites.includes(id) ? state.favorites.filter((item) => item !== id) : [...state.favorites, id];
    renderProducts();
    showToast(state.favorites.includes(id) ? "Saved to your style edit." : "Removed from your saved styles.");
    persist();
    return;
  }
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    if (!state.bag.includes(addButton.dataset.add)) state.bag = [...state.bag, addButton.dataset.add];
    render();
    showToast("Added to your demo bag. No order has been placed.");
    return;
  }
  if (event.target.closest("[data-clear-filters]")) { state.query = ""; state.category = "All"; state.maxPrice = 5000; renderProducts(); persist(); return; }
  if (event.target.closest("[data-toggle-activity]")) { state.activityOpen = !state.activityOpen; renderMission(); persist(); return; }
  if (event.target.closest("[data-pause-mission]")) { state.paused = !state.paused; renderMission(); persist(); showToast(state.paused ? "Mission paused. Your progress is saved." : "Mission resumed."); return; }
  if (event.target.closest("[data-resume-mission]")) {
    state.view = "discover"; state.query = "wedding emerald"; state.category = "Ethnic"; state.maxPrice = 5000; render();
    window.scrollTo({ top: 0, behavior: "smooth" }); showToast("Your wedding edit is ready to review."); return;
  }
  if (event.target.closest("[data-repeat-mission]")) {
    state.paused = false; state.view = "discover"; state.query = "work casual"; state.category = "All"; state.maxPrice = null; render(); showToast("A fresh workweek edit is ready."); return;
  }
  if (event.target.closest(".upload-action")) { document.querySelector("#image-input").click(); return; }
  if (event.target.closest(".voice-action")) { queryInput.value = "wedding guest outfit under ₹5,000"; queryInput.focus(); showToast("Sample voice request added. Choose Find styles to continue."); }
});

document.querySelector("#query-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const request = queryInput.value.trim();
  const amount = request.match(/(?:under|below|less than)\s*₹?\s*([\d,]+)/i) ?? request.match(/₹\s*([\d,]+)/);
  state.maxPrice = amount ? Number(amount[1].replaceAll(",", "")) : null;
  state.query = request.replace(/(?:under|below|less than)\s*₹?\s*[\d,]+|₹\s*[\d,]+/i, "").trim();
  state.category = "All";
  state.view = "discover";
  render();
  showToast(state.query || state.maxPrice ? "Your edit has been refreshed around that brief." : "Showing your personalised edit.");
});

document.querySelector("#sort-select").addEventListener("change", (event) => { state.sort = event.target.value; renderProducts(); persist(); });
document.querySelector("#image-input").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  queryInput.value = "festive jewel-tone look";
  queryInput.focus();
  showToast(`Reference added: ${file.name}. Visual matching is simulated in this prototype.`);
});
document.querySelector("#profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.profile = { size: data.get("size"), palette: data.get("palette"), budget: data.get("budget") };
  state.maxPrice = Number(state.profile.budget);
  state.memory = document.querySelector("#dialog-memory-toggle").checked;
  document.querySelector("#profile-dialog").close();
  render();
  showToast("Your style notes have been updated on this device.");
});
document.querySelector("#memory-toggle").addEventListener("change", (event) => {
  state.memory = event.target.checked;
  renderMission();
  persist();
  showToast(state.memory ? "Style memory is on for this device." : "Style memory is off for this device.");
});
document.querySelector("[data-clear-memory]").addEventListener("click", () => {
  state.profile = { ...defaults.profile };
  state.memory = false;
  document.querySelector("#profile-dialog").close();
  render();
  showToast("Saved style notes and favorites cleared from this device.");
});
document.querySelector("#profile-dialog").addEventListener("click", (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });

render();