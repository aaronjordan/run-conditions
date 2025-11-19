import type { WhichJSRuntime } from "../types";

const c = "kiesel" as const;

export const whichCondition: WhichJSRuntime = () => c;
