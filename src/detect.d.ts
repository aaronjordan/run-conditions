import type { CoreCondition, CommonCondition, JSRuntime, WebpackTargetEnvironment } from "./types";

/**
 * Returns the most specific condition detected in each category.
 */
export declare function detect(): {
  core: CoreCondition | "none";
  common: CommonCondition | "none";
  runtime: JSRuntime | "none";
  webpack: WebpackTargetEnvironment | "none";
};