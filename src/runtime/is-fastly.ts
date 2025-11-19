import type { WhichRuntime } from "../types";

const c = "fastly" as const;

export const whichCondition: WhichRuntime = () => c;
