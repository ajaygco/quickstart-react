import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app/common": path.resolve(__dirname, "src/common"),
      "@app/components": path.resolve(__dirname, "src/components"),
      "@app/helpers": path.resolve(__dirname, "src/helpers"),
      "@app/styles": path.resolve(__dirname, "src/styles"),
      "@app/stores": path.resolve(__dirname, "src/stores"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      reporter: ["text", "json", "html"],
      provider: "v8",
    },
  },
});
