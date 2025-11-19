import type { WhichRuntime } from "../types";

const c = "kiesel" as const;

export const whichCondition: WhichRuntime = () => c;
