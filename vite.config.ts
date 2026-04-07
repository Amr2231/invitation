import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-icons": ["lucide-react"],
          "vendor-carousel": ["embla-carousel-react", "embla-carousel-autoplay"],
        },
      },
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "lucide-react",
      "embla-carousel-react",
      "embla-carousel-autoplay",
    ],
  },
});