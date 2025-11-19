import type { WhichCoreCondition } from "../types";

const c = "import" as const;

export const whichCondition: WhichCoreCondition = () => c;
