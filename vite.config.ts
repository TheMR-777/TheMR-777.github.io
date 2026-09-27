import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // The repository was renamed MyPortfolio-v3 -> TheMR-777.github.io, and GitHub
  // Pages now serves it from the domain root. The single-file plugin inlines all
  // JS/CSS, so this only affects any future non-inlined asset (favicon, images,
  // webmanifest) and should point at the root.
  base: "/",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
