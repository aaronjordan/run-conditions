import type { WhichCommonCondition } from "../types";

const c = "module" as const;

export const whichCondition: WhichCommonCondition = () => c;
