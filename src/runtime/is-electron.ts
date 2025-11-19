import type { WhichJSRuntime } from "../types";

const c = "electron" as const;

export const whichCondition: WhichJSRuntime = () => c;
