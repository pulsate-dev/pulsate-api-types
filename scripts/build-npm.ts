import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/index.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  typeCheck: false,
  test: false,
  package: {
    name: "@pulsate-dev/exp-api-types",
    version: Deno.args[0],
    description: "TypeScript types for the Pulsate API (Experimental)",
    license: "Apache-2.0",
    repository: {
      type: "git",
      url: "git+https://github.com/pulsate-dev/pulsate-api-types.git",
    },
    sideEffects: false,
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "./npm/LICENSE");
    Deno.copyFileSync("README.md", "./npm/README.md");
  },
});
