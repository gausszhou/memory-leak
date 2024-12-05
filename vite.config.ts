import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "development" ? "/" : "/vue-memory-leak",
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
    plugins: [vue()],
  };
});
