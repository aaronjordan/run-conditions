import type { WhichRuntime } from "../types";

const c = "edge-light" as const;

export const whichCondition: WhichRuntime = () => c;
