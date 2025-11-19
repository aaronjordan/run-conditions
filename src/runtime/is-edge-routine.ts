import type { WhichRuntime } from "../types";

const c = "edge-routine" as const;

export const whichCondition: WhichRuntime = () => c;
