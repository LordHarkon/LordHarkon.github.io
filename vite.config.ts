import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      babel: {
        presets: ["jotai/babel/preset"],
      },
    }),
    mkcert(),
    tsconfigPaths(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
    // https: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "public/404.html"),
      },
    },
  },
});
