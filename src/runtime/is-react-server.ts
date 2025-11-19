import type { WhichRuntime } from "../types";

const c = "react-server" as const;

export const whichCondition: WhichRuntime = () => c;
