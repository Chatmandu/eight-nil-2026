import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served at the ROOT of https://eight-nil.manualmode.xyz/
export default defineConfig({
  base: "/",
  plugins: [react()],
});
