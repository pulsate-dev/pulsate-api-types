import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./.generated/schema.json",
  output: "src/",
  plugins: ["@hey-api/typescript"],
});
