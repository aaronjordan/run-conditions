import type { WhichWebpackTargetEnvironment } from "../types";

const c = "browser" as const;

export const whichTargetEnvironment: WhichWebpackTargetEnvironment = () => c;
