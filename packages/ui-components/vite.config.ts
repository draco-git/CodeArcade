import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/

const isExternal = (id: string) =>
  !id.startsWith(".") && !id.startsWith("~/") && !path.isAbsolute(id);
export default defineConfig({
  // @ts-ignore
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui-components",
      fileName: "ui-components",
    },
    rollupOptions: {
      external: isExternal,
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
