import type { WhichWebpackTargetEnvironment } from "../types";

const c = "deno" as const;

export const whichTargetEnvironment: WhichWebpackTargetEnvironment = () => c;
