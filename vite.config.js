import { defineConfig } from "vite";

const base = process.env.GITHUB_PAGES === "true" ? "/prd-myntra-personalized-ai/" : "/";

export default defineConfig({ base });