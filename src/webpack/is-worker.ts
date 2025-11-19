import type { WhichWebpackTargetEnvironment } from "../types";

const c = "worker" as const;

export const whichCondition: WhichWebpackTargetEnvironment = () => c;
