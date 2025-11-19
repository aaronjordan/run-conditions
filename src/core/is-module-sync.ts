import type { WhichCoreCondition } from "../types";

const c = "module-sync" as const;

export const whichCondition: WhichCoreCondition = () => c;
