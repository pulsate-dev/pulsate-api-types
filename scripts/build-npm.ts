import { build, emptyDir } from "@deno/dnt";

const { version } = JSON.parse(Deno.readTextFileSync("deno.json"));

if (typeof version !== "string") {
  throw new Error("deno.json must define a package version");
}

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
    version,
    description:
      "TypeScript types and Fetch API client for Pulsate (Experimental)",
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
