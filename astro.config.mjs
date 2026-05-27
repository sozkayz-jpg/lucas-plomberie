import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://lucas-plomberie.fr",
  trailingSlash: "never",

  build: {
    inlineStylesheets: "auto",
    assets: "assets",
  },

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  prefetch: {
    prefetchAll: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare()
});