import { defineConfig } from "vite";
import istanbul from "vite-plugin-istanbul";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
      nycrcPath: "./.nycrc.json",
      forceBuildInstrument: true,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "instanbul",
      reporter: ["text", "html", "clover"],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
    },
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        chunkFileNames: `[name].[hash].js`,
      },
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components/"),
      },
      {
        find: "@common",
        replacement: path.resolve(__dirname, "./src/components/common"),
      },
      { find: "@pages", replacement: path.resolve(__dirname, "./src/pages/") },
      {
        find: "@styles",
        replacement: path.resolve(__dirname, "./src/styles/"),
      },
      {
        find: "@routes",
        replacement: path.resolve(__dirname, "./src/routes/"),
      },
      {
        find: "@contexts",
        replacement: path.resolve(__dirname, "./src/contexts/"),
      },
      {
        find: "@helpers",
        replacement: path.resolve(__dirname, "./src/helpers/"),
      },
      {
        find: "@types",
        replacement: path.resolve(__dirname, "./src/types/"),
      },
      {
        find: "@layouts",
        replacement: path.resolve(__dirname, "./src/layouts/"),
      },
      { find: "@hooks", replacement: path.resolve(__dirname, "./src/hooks/") },
      { find: "@tests", replacement: path.resolve(__dirname, "./src/tests/") },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "./src/constants/"),
      },
    ],
  },
});
