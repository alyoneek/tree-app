import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@components": "/src/components",
    },
  },
  plugins: [react()],
});
