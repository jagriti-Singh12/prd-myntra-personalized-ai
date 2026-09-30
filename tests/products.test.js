import test from "node:test";
import assert from "node:assert/strict";
import { filterProducts, normalizeQuery, products } from "../src/products.js";

test("filters by category and maximum price together", () => {
  const results = filterProducts(products, { category: "Ethnic", maxPrice: 4000 });
  assert.ok(results.length > 0);
  assert.ok(results.every((product) => product.category === "Ethnic" && product.price <= 4000));
});

test("matches query terms against product tags", () => {
  const results = filterProducts(products, { query: "wedding emerald" });
  assert.ok(results.length > 0);
  assert.ok(results.every((product) => product.tags.includes("wedding")));
});

test("normalizes a natural-language request and budget", () => {
  assert.equal(normalizeQuery("Wedding guest outfit under ₹5,000"), "wedding");
});

test("generic guest wording does not hide wedding recommendations", () => {
  const results = filterProducts(products, { query: "wedding guest outfit" });
  assert.ok(results.length > 0);
  assert.ok(results.every((product) => product.tags.includes("wedding")));
});

test("returns no products when no result satisfies every query term", () => {
  assert.deepEqual(filterProducts(products, { query: "wedding denim" }), []);
});