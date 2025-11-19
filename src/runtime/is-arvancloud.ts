import type { WhichRuntime } from "../types";

const c = "arvancloud" as const;

export const whichCondition: WhichRuntime = () => c;
