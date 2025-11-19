import type { WhichRuntime } from "../types";

const c = "wasmer" as const;

export const whichCondition: WhichRuntime = () => c;
