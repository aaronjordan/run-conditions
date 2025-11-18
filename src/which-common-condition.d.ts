import type { CommonCondition, WhichCommonCondition } from "./types";

/**
 * Returns the name of the most specific common custom Node.js import condition
 * that applies to the current entrypoint.
 *
 * https://nodejs.org/api/packages.html#community-conditions-definitions
 */
export function whichCommonCondition(): CommonCondition;