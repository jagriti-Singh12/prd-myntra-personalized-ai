export const products = [
  { id: "biba-set", brand: "Biba", name: "Metallic Print Kurta with Sharara", price: 3899, originalPrice: 7999, rating: "4.5", reviews: "3.8k", category: "Ethnic", match: 98, note: "Emerald tones and an easy A-line fit, just like your saved picks.", tags: ["wedding", "festive", "emerald", "jewel", "kurta", "green"], image: new URL("./assets/products/product-06.jpg", import.meta.url).href },
  { id: "libas-kurta", brand: "Libas", name: "Zari Embroidered Yoke Kurta Set", price: 2499, originalPrice: 4999, rating: "4.4", reviews: "1.2k", category: "Ethnic", match: 96, note: "A breathable festive favorite in your jewel-tone palette.", tags: ["wedding", "festive", "emerald", "jewel", "kurta", "green"], image: new URL("./assets/products/product-05.jpg", import.meta.url).href },
  { id: "w-kurta", brand: "W for Woman", name: "Keyhole Neck Flared Kurta", price: 3199, originalPrice: 5999, rating: "4.6", reviews: "890", category: "Ethnic", match: 93, note: "A flowy silhouette and a polished neckline for all-day plans.", tags: ["wedding", "festive", "green", "jewel", "kurta", "office"], image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=850&q=85" },
  { id: "libas-velvet", brand: "Libas", name: "Velvet Touch Anarkali Set", price: 4499, originalPrice: 8999, rating: "4.7", category: "Ethnic", match: 91, note: "A richer evening look that stays within your usual spend.", tags: ["wedding", "festive", "emerald", "jewel", "anarkali", "green"], image: new URL("./assets/products/product-06.jpg", import.meta.url).href },
  { id: "indya-zari", brand: "Indya", name: "Zari Crop Top & Tiered Maxi Skirt", price: 4290, originalPrice: 5500, rating: "4.2", category: "Ethnic", match: 89, note: "A modern festive shape for when you want a change from a kurta.", tags: ["wedding", "festive", "wine", "jewel", "skirt", "fusion"], image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=850&q=85" },
  { id: "sangria-gown", brand: "Sangria", name: "Sequined Anarkali Gown Set", price: 4899, originalPrice: 7499, rating: "4.3", category: "Ethnic", match: 87, note: "A little extra sparkle, balanced with a familiar silhouette.", tags: ["wedding", "festive", "rose", "jewel", "anarkali", "party"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=850&q=85" },
  { id: "dressberry-midi", brand: "DressBerry", name: "Floral Print Midi Dress", price: 1799, originalPrice: 3599, rating: "4.3", reviews: "2.4k", category: "Western", match: 82, note: "An easy daytime option with a shape you already reach for.", tags: ["day", "floral", "dress", "western", "casual", "pastel"], image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&w=850&q=85" },
  { id: "gold-jhumkas", brand: "Accessorize London", name: "Gold-Toned Stone-Studded Jhumkas", price: 1299, originalPrice: 2499, rating: "4.1", reviews: "328", category: "Accessories", match: 80, note: "A finishing touch that pairs naturally with your festive edit.", tags: ["jewellery", "accessories", "gold", "wedding", "festive", "jewel"], image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=850&q=85" },
];

const ignoredTerms = new Set(["a", "an", "and", "for", "find", "guest", "in", "look", "me", "my", "of", "outfit", "show", "the", "to", "under", "with"]);

export function normalizeQuery(query) {
  return String(query ?? "").toLowerCase().replace(/₹\s*[\d,]+|\b\d[\d,]*\b/g, " ").replace(/[^a-z\s]/g, " ").split(/\s+/).filter((term) => term.length > 1 && !ignoredTerms.has(term)).join(" ");
}

export function filterProducts(items, { category = "All", maxPrice = null, query = "" } = {}) {
  const terms = normalizeQuery(query).split(" ").filter(Boolean);
  return items.filter((product) => category === "All" || product.category === category)
    .filter((product) => maxPrice === null || product.price <= maxPrice)
    .filter((product) => {
      const searchableText = [product.brand, product.name, ...(product.tags ?? [])].join(" ").toLowerCase();
      return terms.every((term) => searchableText.includes(term));
    });
}

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount);
}