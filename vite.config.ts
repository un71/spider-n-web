import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const PORT = 8000;

export default defineConfig({
  plugins: [
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "komplektaciya-boksa-petelnogo-oruzhiya": resolve(
          __dirname,
          "komplektaciya-boksa-petelnogo-oruzhiya.html",
        ),
        "kreplenie-dlya-remnya": resolve(
          __dirname,
          "kreplenie-dlya-remnya.html",
        ),
        "process-sborki-rabochey-golovy": resolve(
          __dirname,
          "process-sborki-rabochey-golovy.html",
        ),
        "process-sborki-setkometa": resolve(
          __dirname,
          "process-sborki-setkometa.html",
        ),
      },
    },
  },
  server: {
    port: PORT,
    host: true,
    open: true,
  },
  preview: {
    port: PORT,
    host: true,
    open: true,
  },
});
