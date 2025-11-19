import type { WhichRuntime } from "../types";

const c = "deno" as const;

export const whichCondition: WhichRuntime = () => c;
