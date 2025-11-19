import type {
	CoreCondition,
	CommonCondition,
	JSRuntime,
	WebpackTargetEnvironment,
} from "./types";

/**
 * Returns all matching conditions detected in each category.
 */
export declare function detect(): {
	core: CoreCondition[];
	common: CommonCondition[];
	runtime: JSRuntime[];
	webpack: WebpackTargetEnvironment[];
};
