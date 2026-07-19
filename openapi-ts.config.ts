import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./.generated/schema.json",
  output: {
    module: {
      extension: ".ts",
    },
    path: "src/",
  },
  plugins: [
    {
      name: "@hey-api/typescript",
      comments: true,
    },
    {
      name: "@hey-api/client-fetch",
      includeInEntry: true,
    },
    {
      name: "@hey-api/sdk",
      comments: true,
    },
  ],
});
