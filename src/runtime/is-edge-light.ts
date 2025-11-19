import type { WhichJSRuntime } from "../types";

const c = "edge-light" as const;

export const whichCondition: WhichJSRuntime = () => c;
