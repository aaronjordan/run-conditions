import type { WhichCommonCondition } from "../types";

const c = "development" as const;

export const whichCondition: WhichCommonCondition = () => c;
