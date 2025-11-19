import type { WhichRuntime } from "../types";

const c = "electron" as const;

export const whichCondition: WhichRuntime = () => c;
