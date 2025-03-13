import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the output folder is "dist"
    dir: 'dist',
    format: 'esm',
  },
});
