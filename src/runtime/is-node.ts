import type { WhichRuntime } from "../types";

const c = "node" as const;

export const whichCondition: WhichRuntime = () => c;
