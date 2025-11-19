import type { WhichWebpackTargetEnvironment } from "../types";

const c = "node" as const;

export const whichCondition: WhichWebpackTargetEnvironment = () => c;
