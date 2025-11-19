import type { WhichRuntime } from "../types";

const c = "bun" as const;

export const whichCondition: WhichRuntime = () => c;
