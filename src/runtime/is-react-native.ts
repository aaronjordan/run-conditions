import type { WhichJSRuntime } from "../types";

const c = "react-native" as const;

export const whichCondition: WhichJSRuntime = () => c;
