# pulsate-api-types

TypeScript types generated from the Pulsate OpenAPI schema.

The source package is published as `@pulsate/exp-api-types` on JSR and as
`@pulsate-dev/exp-api-types` on npm.

## Install

```sh
deno add jsr:@pulsate/exp-api-types
```

```sh
npm install @pulsate-dev/exp-api-types
```

## Generate Types

Requirements: Deno 2.

```bash
deno task build
```

`deno task build` fetches the OpenAPI schema from the fixed
`@pulsate-dev/api-schema` version in `deno.json`, generates `src/`, and does not
require a locally copied schema file.

To update the schema, explicitly change the `@pulsate-dev/api-schema` version in
`deno.json` and `package.json`, then regenerate the types and lockfile.

## Build npm Package

The npm package is generated with dnt.

```bash
deno task build-npm
```

## Release

Push a `v<version>` tag matching `deno.json`'s `version`. GitHub Actions
verifies generated types, publishes `@pulsate/exp-api-types` to JSR, then
publishes `@pulsate-dev/exp-api-types` to npm.

## Licenses

Copyright (C) 2025 Pulsate Project

Licensed under Apache 2.0 license
