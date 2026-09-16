import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  // Project Pages: https://kazprod333-spec.github.io/k3ch-site/
  // Local: npm run dev / preview serve under /k3ch-site/ (see README).
  base: "/k3ch-site/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

