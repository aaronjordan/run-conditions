import type { WhichWebpackTargetEnvironment } from "../types";

const c = "electron" as const;

export const whichTargetEnvironment: WhichWebpackTargetEnvironment = () => c;
