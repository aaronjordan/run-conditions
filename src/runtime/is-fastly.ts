import type { WhichJSRuntime } from "../types";

const c = "fastly" as const;

export const whichCondition: WhichJSRuntime = () => c;
