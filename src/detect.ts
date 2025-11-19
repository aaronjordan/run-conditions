import { whichCondition as whichCoreCondition } from "detect-conditions/which/core";
import { whichCondition as whichCommonCondition } from "detect-conditions/which/common";
import { whichCondition as whichRuntime } from "detect-conditions/which/runtime";
import { whichCondition as whichWebpackTargetEnvironment } from "detect-conditions/which/webpack";

/**
 * Returns the most specific condition detected in each category.
 */
export function detect() {
  return {
    core: whichCoreCondition(),
    common: whichCommonCondition(),
    runtime: whichRuntime(),
    webpack: whichWebpackTargetEnvironment(),
  };
}
