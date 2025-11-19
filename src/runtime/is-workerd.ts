import type { WhichRuntime } from "../types";

const c = "workerd" as const;

export const whichCondition: WhichRuntime = () => c;
