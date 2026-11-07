# pulsate-api-types

[![JSR](https://jsr.io/badges/@pulsate/exp-api-types)](https://jsr.io/@pulsate/exp-api-types)
[![npm](https://img.shields.io/npm/v/@pulsate-dev/exp-api-types)](https://www.npmjs.com/package/@pulsate-dev/exp-api-types)

TypeScript types and a Fetch API client generated from the Pulsate OpenAPI
schema.

The source package is published as `@pulsate/exp-api-types` on JSR and as
`@pulsate-dev/exp-api-types` on npm.

## Install

```sh
deno add jsr:@pulsate/exp-api-types
```

```sh
npm install @pulsate-dev/exp-api-types
```

## Use Fetch Client

```ts
import { client, getV0TimelinePublic } from "@pulsate-dev/exp-api-types";

client.setConfig({
  baseUrl: "https://demo.pulsate.dev",
});

const { data, error } = await getV0TimelinePublic();

if (error) {
  throw error;
}

console.log(data[0]?.content);
```

## Use Types

```ts
import type { GetPublicTimelineResponse } from "@pulsate-dev/exp-api-types";

type TimelineProps = {
  timeline: GetPublicTimelineResponse;
};

export function Timeline({ timeline }: TimelineProps) {
  return timeline.map((note) => note.content);
}
```

## Generate Types

Requirements: [mise](https://mise.jdx.dev/) (installs Node.js and pnpm).

```bash
mise install
pnpm install
pnpm generate
```

`pnpm generate` writes the OpenAPI schema from the fixed
`@pulsate-dev/api-schema` version in `package.json`, generates `src/`, and does
not require a locally copied schema file. OpenAPI descriptions are emitted as
JSDoc comments in generated types and operation functions.

To update the schema, explicitly change the `@pulsate-dev/api-schema` version in
`package.json`, then regenerate the types and lockfile.

## Build npm Package

The npm package is compiled from `src/` into `dist/` with `tsc`.

```bash
pnpm build
```

## Release

Push a `v<version>` tag matching `version` in both `package.json` and
`jsr.json`. GitHub Actions verifies generated types, publishes
`@pulsate/exp-api-types` to JSR, then publishes `@pulsate-dev/exp-api-types` to
npm.

## Licenses

Copyright (C) 2025 Pulsate Project

Licensed under Apache 2.0 license
