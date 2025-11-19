import type { WhichWebpackTargetEnvironment } from "../types";

const c = "worklet" as const;

export const whichTargetEnvironment: WhichWebpackTargetEnvironment = () => c;
