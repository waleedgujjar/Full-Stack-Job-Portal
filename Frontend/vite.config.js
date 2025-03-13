import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Moves dependencies to a separate chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increases warning limit (optional)
  },
});
