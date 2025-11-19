import type { WhichJSRuntime } from "../types";

const c = "node" as const;

export const whichCondition: WhichJSRuntime = () => c;
