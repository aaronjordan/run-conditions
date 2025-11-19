import type { WhichCommonCondition } from "../types";

const c = "production" as const;

export const whichCondition: WhichCommonCondition = () => c;
