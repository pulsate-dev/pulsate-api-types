import schema from "@pulsate-dev/api-schema" with { type: "json" };

await Deno.mkdir(".generated", { recursive: true });
await Deno.writeTextFile(
  ".generated/schema.json",
  `${JSON.stringify(schema, null, 2)}\n`,
);
