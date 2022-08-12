import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@domain": path.resolve(__dirname, "./src/domain"),
      "@infrastructure": path.resolve(__dirname, "./src/infrastructure"),
      "@ui": path.resolve(__dirname, "./src/ui"),
    },
  },
});
