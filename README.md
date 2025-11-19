# detect-conditions

> **🔍 Runtime environment detection for JavaScript**

[![npm version](https://img.shields.io/npm/v/detect-conditions.svg)](https://www.npmjs.com/package/detect-conditions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Ever wondered if your code is running in Bun, Deno, Node.js, or some edge runtime? This library uses the power of [export conditions](https://nodejs.org/api/packages.html#conditional-exports) to detect JavaScript runtime environments with **zero runtime overhead**.

## ✨ Features

- 🚀 **Zero runtime cost** - Detection happens at import/bundle time
- 🎯 **Accurate detection** - Works in Vercel Edge, Cloudflare Workers, and 20+ runtimes
- 📦 **Tiny bundle** - Tree-shakeable, only include what you need
- 🔄 **Three APIs** - Simple booleans, strategic detection, or comprehensive analysis
- 🛠️ **TypeScript native** - Full type safety out of the box

## 🚀 Quick Start

```bash
npm install detect-conditions
# or
bun add detect-conditions
# or
pnpm add detect-conditions
```

```ts
import { isBun, isProduction } from "detect-conditions/assert";
import { detect } from "detect-conditions";

// Quick boolean checks
if (isBun()) {
  console.log("Running in Bun! 🍞");
}

// Strategic detection
const env = detect();
console.log(env);
// → { core: "import", runtime: "bun", common: "development", webpack: "none" }
```

## 📖 API Guide

### 🎯 Simple Assertions (`/assert`)

**Perfect for:** Quick runtime checks, feature flags, conditional imports

```ts
import {
  isBun,
  isDeno,
  isNode,
  isWorkerd,
  isProduction,
  isDevelopment,
  isBrowser,
  isElectron,
} from "detect-conditions/assert";

// Runtime detection
if (isBun()) {
  // Bun-specific optimizations
  await import("./bun-optimized-module.js");
}

// Environment detection
if (isProduction()) {
  enableAnalytics();
} else {
  enableDebugMode();
}

// Platform detection
if (isBrowser()) {
  setupClientSideCode();
} else if (isElectron()) {
  setupElectronMain();
}
```

### 🧠 Strategic Detection (main export)

**Perfect for:** Understanding your primary runtime context

```ts
import { detect } from "detect-conditions";

const env = detect();
// Returns the most specific condition in each category:
// {
//   core: "import" | "require" | "node" | "module-sync" | "node-addons" | "default" | "none",
//   runtime: "bun" | "deno" | "workerd" | "node" | ... | "none",
//   common: "production" | "development" | "browser" | "module" | "default" | "none",
//   webpack: "browser" | "node" | "electron" | "worker" | ... | "none"
// }

// Use cases:
if (env.runtime === "workerd") {
  // Cloudflare Workers specific code
  setupCloudflareBindings();
} else if (env.runtime === "bun") {
  // Use Bun's native APIs
  const file = Bun.file("config.json");
}
```

### 🔍 Comprehensive Analysis (`/all`)

**Perfect for:** Debugging, analytics, comprehensive environment analysis

```ts
import { detectAll } from "detect-conditions/all";

const allConditions = detectAll();
// Returns ALL active conditions grouped by category:
// {
//   core: ["node", "import"],
//   runtime: ["workerd"],
//   common: ["production", "module"],
//   webpack: []
// }

// Use cases:
if (
  allConditions.runtime.includes("workerd") &&
  allConditions.common.includes("production")
) {
  // Running in Cloudflare Workers production
  initProductionLogging();
}

// Analytics
sendTelemetry({
  runtimeConditions: allConditions.runtime,
  environment: allConditions.common,
});
```

## 🌍 Supported Runtimes

### Core Platforms

- **Node.js** - The original JavaScript runtime
- **Bun** - Fast all-in-one JavaScript runtime
- **Deno** - Secure TypeScript/JavaScript runtime

### Edge Computing

- **Cloudflare Workers** (`workerd`)
- **Vercel Edge Runtime** (`edge-light`)
- **Netlify Edge Functions** (`netlify`)
- **Fastly Compute** (`fastly`)

### Cloud Platforms

- **AWS Lambda** (via Node.js/Bun detection)
- **Vercel Functions** (auto-detects Node.js/Bun/Edge)
- **Azure Functions** (via Node.js detection)

### Development Tools

- **Webpack** - Target environment detection
- **Vite** - Development vs production
- **Electron** - Desktop app context

[See full runtime list →](https://runtime-keys.proposal.wintercg.org/)

## 💡 Real-World Examples

### Smart Module Loading

```ts
import { detect } from "detect-conditions";

const { runtime } = detect();

// Load runtime-specific implementations
const db = await (async () => {
  switch (runtime) {
    case "workerd":
      return import("./db/cloudflare-d1.js");
    case "netlify":
      return import("./db/netlify-blobs.js");
    case "bun":
      return import("./db/bun-sqlite.js");
    default:
      return import("./db/generic.js");
  }
})();
```

### Feature Flag System

```ts
import { isBun, isProduction, detectAll } from "detect-conditions/assert";

export const features = {
  // Enable Bun's native APIs when available
  fastHashing: isBun(),

  // Production-only features
  analytics: isProduction(),

  // Complex conditions
  experimentalFeatures: (() => {
    const all = detectAll();
    return all.runtime.includes("deno") && !all.common.includes("production");
  })(),
};
```

### Polyfill Loading

```ts
import { isBrowser, isNode } from "detect-conditions/assert";

// Only load polyfills where needed
if (isBrowser() && !globalThis.crypto) {
  await import("crypto-polyfill");
}

if (isNode() && !globalThis.fetch) {
  await import("node-fetch-polyfill");
}
```

## 🎯 Why Export Conditions?

Traditional runtime detection often relies on checking global objects:

```ts
// ❌ Unreliable and runtime overhead
const isBun = typeof Bun !== "undefined";
const isDeno = typeof Deno !== "undefined";
```

**detect-conditions** uses [export conditions](https://nodejs.org/api/packages.html#conditional-exports) instead:

```ts
// ✅ Reliable and zero runtime cost
import { isBun } from "detect-conditions/assert";
```

This works because bundlers and runtimes resolve the correct export at build/import time, meaning:

- **🚀 Zero runtime overhead** - No conditional checks in your final bundle
- **🎯 100% accurate** - Based on actual runtime behavior, not global object detection
- **📦 Tree-shakeable** - Only the checks you use are included
- **🛡️ Future-proof** - Works with new runtimes automatically

## 📄 License

MIT
