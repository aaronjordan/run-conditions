import type { WhichWebpackTargetEnvironment } from "../types";

const c = "react-native" as const;

export const whichTargetEnvironment: WhichWebpackTargetEnvironment = () => c;
