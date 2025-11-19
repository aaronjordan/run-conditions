import type { WhichRuntime } from "../types";

const c = "moddable" as const;

export const whichCondition: WhichRuntime = () => c;
