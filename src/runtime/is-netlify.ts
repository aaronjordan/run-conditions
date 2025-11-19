import type { WhichJSRuntime } from "../types";

const c = "netlify" as const;

export const whichCondition: WhichJSRuntime = () => c;
