import type { WhichCoreCondition } from "../types";

const c = "node" as const;

export const whichCondition: WhichCoreCondition = () => c;
