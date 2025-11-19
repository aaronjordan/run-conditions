/**
 * @file A generic is file to use when no conditions in a set match.
 */

import type { AnyNoneCondition, CanReach } from "./types";

/**
 * When this is encountered, no conditions from the import list matched the
 * entrypoint at compilation or runtime, depending on when the import for this
 * statement was resolved.
 */
const none = "none" as const;
const getNone = () => none;

export const canReach: CanReach = () => false;
export const whichCondition: AnyNoneCondition = getNone;
