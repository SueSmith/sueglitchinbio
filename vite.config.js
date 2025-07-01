import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

// import json of links and meta in /config
import settings from "./settings.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'layout'),
      helpers: {
        hostasclass: (value) => new URL(value).hostname.replace(/\./g,'_'),
      },
      context: {
        settings
      }
    })
  ],
  build: {
    cssCodeSplit: false,
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      overlay:false
    }
  }
});
