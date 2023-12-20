import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      common: path.resolve(__dirname, "src/common"),
      components: path.resolve(__dirname, "src/components"),
      helpers: path.resolve(__dirname, "src/helpers"),
      styles: path.resolve(__dirname, "src/styles"),
      stores: path.resolve(__dirname, "src/stores"),
    },
  },
  test: {
    root: "./src",
    environment: "jsdom",
    testMatch: ["./tests/**/*.test.tsx"],
    globals: true,
    coverage: {
      enabled: true,
      reporter: ["text", "json", "html"],
      provider: "v8",
    },
  },
});
