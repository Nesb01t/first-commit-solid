import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  vite: {
    plugins: [UnoCSS()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    }
  },
});
