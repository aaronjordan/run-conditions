import type { WhichJSRuntime } from "../types";

const c = "lagon" as const;

export const whichCondition: WhichJSRuntime = () => c;
