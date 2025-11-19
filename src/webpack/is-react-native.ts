import type { WhichWebpackTargetEnvironment } from "../types";

const c = "react-native" as const;

export const whichCondition: WhichWebpackTargetEnvironment = () => c;
