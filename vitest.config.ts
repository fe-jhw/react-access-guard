import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/// <reference types="vitest/config" />
const vitestConfig = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setupTest.ts",
  },
};

export default defineConfig({
  plugins: [react()],
  ...vitestConfig,
});