import type { JSRuntime, WhichRuntime } from "./types";

/**
 * Returns the name of the most specific runtime import condition that applies
 * to the current entrypoint.
 *
 * For instance, when running on Vercel Functions, this could return any of
 * `node`, `bun`, `react-server`, or even `edge-light` if using the
 * [Edge Runtime](https://vercel.com/docs/functions/runtimes/edge).
 */
export function whichRuntime(): JSRuntime;
