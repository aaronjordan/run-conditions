import type { WhichRuntime } from "../types";

const c = "react-native" as const;

export const whichCondition: WhichRuntime = () => c;
