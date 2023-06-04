import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@ui": "/src/ui",
      "@styles": "/src/styles",
      "@store": "/src/store",
    },
  },
  plugins: [react(), svgr()],
});
