import type { WhichJSRuntime } from "../types";

const c = "azion" as const;

export const whichCondition: WhichJSRuntime = () => c;
