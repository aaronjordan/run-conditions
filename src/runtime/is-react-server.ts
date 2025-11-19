import type { WhichJSRuntime } from "../types";

const c = "react-server" as const;

export const whichCondition: WhichJSRuntime = () => c;
