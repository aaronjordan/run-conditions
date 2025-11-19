import type { WhichWebpackTargetEnvironment } from "../types";

const c = "node" as const;

export const whichTargetEnvironment: WhichWebpackTargetEnvironment = () => c;
