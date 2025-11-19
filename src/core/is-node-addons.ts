import type { WhichCoreCondition } from "../types";

const c = "node-addons" as const;

export const whichCondition: WhichCoreCondition = () => c;
