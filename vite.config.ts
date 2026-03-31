import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig } from "vite";

// Fix for __dirname in ESM (standard for Vite projects)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Uses the path fix above for the alias
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Fixes the Vercel/Better-Auth error by telling Vite
      // not to panic if it can't bundle this specific module
      external: ["@opentelemetry/api"],
    },
  },
});