import type { WhichJSRuntime } from "../types";

const c = "wasmer" as const;

export const whichCondition: WhichJSRuntime = () => c;
