import type { WhichRuntime } from "../types";

const c = "azion" as const;

export const whichCondition: WhichRuntime = () => c;
