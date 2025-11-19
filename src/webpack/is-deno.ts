import type { WhichWebpackTargetEnvironment } from "../types";

const c = "deno" as const;

export const whichCondition: WhichWebpackTargetEnvironment = () => c;
