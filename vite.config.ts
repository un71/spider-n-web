import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const PORT = 8000;

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "build",
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
