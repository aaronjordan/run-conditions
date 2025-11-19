import type { WhichJSRuntime } from "../types";

const c = "arvancloud" as const;

export const whichCondition: WhichJSRuntime = () => c;
