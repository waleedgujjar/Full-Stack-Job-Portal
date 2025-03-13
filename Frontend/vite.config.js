import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the output folder is "dist"
    target: "esnext", // Specify the target environment (optional, but recommended)
    format: "esm", // Set the output format as ESM (optional)
  },
});

