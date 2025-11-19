import type { WhichJSRuntime } from "../types";

const c = "bun" as const;

export const whichCondition: WhichJSRuntime = () => c;
