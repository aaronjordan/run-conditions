import type { WhichRuntime } from "../types";

const c = "netlify" as const;

export const whichCondition: WhichRuntime = () => c;
