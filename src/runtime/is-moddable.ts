import type { WhichJSRuntime } from "../types";

const c = "moddable" as const;

export const whichCondition: WhichJSRuntime = () => c;
