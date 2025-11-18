import type { CoreCondition, WhichCoreCondition } from "./types";

/**
 * Returns the name of the most specific native Node.js import condition that
 * applies to the current entrypoint.
 *
 * https://nodejs.org/api/packages.html#conditional-exports
 */
export function whichCoreCondition(): CoreCondition;