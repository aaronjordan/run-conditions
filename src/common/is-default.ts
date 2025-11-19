import type { WhichCommonCondition } from "../types";

const c = "default" as const;

export const whichCondition: WhichCommonCondition = () => c;
