import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/xd/dist/",
});

// base: "https://sujansince2003.github.io/ngo",
