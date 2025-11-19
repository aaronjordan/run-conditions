import type { WhichJSRuntime } from "../types";

const c = "edge-routine" as const;

export const whichCondition: WhichJSRuntime = () => c;
