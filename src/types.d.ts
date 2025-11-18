/**
 * Conditions implemented by Node.js at its core.
 * https://nodejs.org/api/packages.html#conditional-exports
 */
type CoreCondition =
  | "import"
  | "require"
  | "node"
  | "module-sync"
  | "node-addons"
  | "default";

/**
 * Community conditions listed by Node.js
 * https://nodejs.org/api/packages.html#community-conditions-definitions
 *
 * (We can't actually check for `types` as we need that for TS)
 */
type CommonCondition =
  | "types"
  | "browser"
  | "development"
  | "production"
  | "default"
  | "module";

/**
 * A collection of conditions used by JS runtimes registered at
 * https://runtime-keys.proposal.wintercg.org/
 */
type JSRuntime =
  | "edge-routine"
  | "arvancloud"
  | "azion"
  | "workerd"
  | "deno"
  | "lagon"
  | "react-native"
  | "moddable"
  | "netlify"
  | "electron"
  | "node"
  | "bun"
  | "react-server"
  | "edge-light"
  | "fastly"
  | "kiesel"
  | "wasmer";

/**
 * Conditions set by Webpack depending on the compilation's target environment.
 *
 * https://webpack.js.org/guides/package-exports/#target-environment
 */
type WebpackTargetEnvironment =
  | "browser"
  | "electron"
  | "worker"
  | "worklet"
  | "node"
  | "deno"
  | "react-native";

/**
 * Returns the name of the most specific native Node.js import condition that
 * applies to the current entrypoint.
 *
 * https://nodejs.org/api/packages.html#conditional-exports
 */
export type WhichCoreCondition = () => CoreCondition | "none";

/**
 * Returns the name of the most specific common custom Node.js import condition
 * that applies to the current entrypoint.
 *
 * https://nodejs.org/api/packages.html#community-conditions-definitions
 */
export type WhichCommonCondition = () => CommonCondition | "none";

/**
 * Returns the name of the most specific runtime import condition that applies
 * to the current entrypoint.
 *
 * For instance, when running on Vercel Functions, this could return any of
 * `node`, `bun`, `react-server`, or even `edge-light` if using the
 * [Edge Runtime](https://vercel.com/docs/functions/runtimes/edge).
 */
export type WhichRuntime = () => JSRuntime | "none";

/**
 * Returns the name of the most specific Webpack target environment that was
 * used during compilation of this entrypoint.
 *
 * https://webpack.js.org/guides/package-exports/#target-environment
 */
export type WhichWebpackTargetEnvironment = () =>
  | WebpackTargetEnvironment
  | "none";

/**
 * Returns `true` if this specific condition can _ever_ be reached by this entrypoint.
 *
 * For example, we would expect `canReach` from a "default" condition file to always return `true`.
 */
export type CanReach = () => boolean;
