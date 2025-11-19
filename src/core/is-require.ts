import type { WhichCoreCondition } from "../types";

const c = "require" as const;

export const whichCondition: WhichCoreCondition = () => c;
