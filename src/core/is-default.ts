import type { WhichCoreCondition } from "../types";

const c = "default" as const;

export const whichCondition: WhichCoreCondition = () => c;
