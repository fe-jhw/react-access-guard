import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tsconfigPaths(), dts({
    rollupTypes: true,
    tsconfigPath: "./tsconfig.app.json",
    entryRoot: 'src',
    include: ['src'],
    exclude: ['node_modules', 'dist', '**/*.test.ts*', './src/vite-env.d.ts'],
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/main.ts'),
      name: 'react-access-guard',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ["react", /^react\/.*/, "react-dom", /react-dom\/.*/],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
