import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/// <reference types="vitest/config" />
const vitestConfig = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setupTest.ts",
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/lib/**'],
      exclude: [
        'src/App.tsx',
        'src/main.tsx',
        'src/lib/main.ts'
      ],
      all: true,
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
};

export default defineConfig({
  plugins: [react()],
  ...vitestConfig,
});