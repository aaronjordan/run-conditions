# detect-conditions

[![npm version](https://img.shields.io/npm/v/detect-conditions.svg)](https://www.npmjs.com/package/detect-conditions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

This package can be used to explore `conditions` that apply to a module at build or runtime. This can be used to perform platform detection, select conditions to use when offering [conditional exports](https://nodejs.org/api/packages.html#conditional-exports), or as a debugging tool.

## 🚀 Quick Start

Install the package in the module you'd like more information about.

```bash
npm install detect-conditions
# or
bun add detect-conditions
# or
pnpm add detect-conditions
```

Gather any information you need! We check for a long list of conditions and if something you need is not accounted for, open a PR.

The main export of the package is the `detect` function, which will report all known conditions that match the module. Individual `is*` exports are also available for all conditions.

```ts
import { detect } from "detect-conditions";
import { isBun } from "detect-conditions/assert";

// `detect` checks for all listed conditions.
const conditions = detect();
console.log(conditions);
// => {
//   common: [ 'production', 'module', 'default' ],
//   core: [ 'import', 'node', 'default' ],
//   runtime: [ 'react-server', 'node' ],
//   webpack: [ 'node' ]
// }

// Boolean checks for individual conditions.
if (isBun()) {
  console.log("Running in Bun!");
} else {
  console.log("Not a Bun-like environment. Sad.");
}
```

## 📄 License

MIT
