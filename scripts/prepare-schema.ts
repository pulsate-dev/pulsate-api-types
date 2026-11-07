import { mkdirSync, writeFileSync } from 'node:fs';
import schema from '@pulsate-dev/api-schema/schema.json' with { type: 'json' };

mkdirSync('.generated', { recursive: true });
writeFileSync('.generated/schema.json', `${JSON.stringify(schema, null, 2)}\n`);
