import type { WhichRuntime } from "../types";

const c = "lagon" as const;

export const whichCondition: WhichRuntime = () => c;
