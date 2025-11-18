import type { WebpackTargetEnvironment, WhichWebpackTargetEnvironment } from "./types";

/**
 * Returns the name of the most specific Webpack target environment that was
 * used during compilation of this entrypoint.
 *
 * https://webpack.js.org/guides/package-exports/#target-environment
 */
export function whichWebpackTargetEnvironment(): WebpackTargetEnvironment;