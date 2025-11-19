import type { WhichCommonCondition } from "../types";

const c = "browser" as const;

export const whichCondition: WhichCommonCondition = () => c;
