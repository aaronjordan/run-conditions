import type { WhichJSRuntime } from "../types";

const c = "workerd" as const;

export const whichCondition: WhichJSRuntime = () => c;
