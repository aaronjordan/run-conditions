import { canReach as arvancloud } from "detect-conditions/_internal/can-reach/arvancloud";
import { canReach as azion } from "detect-conditions/_internal/can-reach/azion";
import { canReach as browser } from "detect-conditions/_internal/can-reach/browser";
import { canReach as bun } from "detect-conditions/_internal/can-reach/bun";
import { canReach as default_ } from "detect-conditions/_internal/can-reach/default";
import { canReach as deno } from "detect-conditions/_internal/can-reach/deno";
import { canReach as development } from "detect-conditions/_internal/can-reach/development";
import { canReach as edgeLight } from "detect-conditions/_internal/can-reach/edge-light";
import { canReach as edgeRoutine } from "detect-conditions/_internal/can-reach/edge-routine";
import { canReach as electron } from "detect-conditions/_internal/can-reach/electron";
import { canReach as fastly } from "detect-conditions/_internal/can-reach/fastly";
import { canReach as import_ } from "detect-conditions/_internal/can-reach/import";
import { canReach as kiesel } from "detect-conditions/_internal/can-reach/kiesel";
import { canReach as lagon } from "detect-conditions/_internal/can-reach/lagon";
import { canReach as moddable } from "detect-conditions/_internal/can-reach/moddable";
import { canReach as module } from "detect-conditions/_internal/can-reach/module";
import { canReach as moduleSync } from "detect-conditions/_internal/can-reach/module-sync";
import { canReach as netlify } from "detect-conditions/_internal/can-reach/netlify";
import { canReach as node } from "detect-conditions/_internal/can-reach/node";
import { canReach as nodeAddons } from "detect-conditions/_internal/can-reach/node-addons";
import { canReach as production } from "detect-conditions/_internal/can-reach/production";
import { canReach as reactNative } from "detect-conditions/_internal/can-reach/react-native";
import { canReach as reactServer } from "detect-conditions/_internal/can-reach/react-server";
import { canReach as require_ } from "detect-conditions/_internal/can-reach/require";
import { canReach as wasmer } from "detect-conditions/_internal/can-reach/wasmer";
import { canReach as worker } from "detect-conditions/_internal/can-reach/worker";
import { canReach as workerd } from "detect-conditions/_internal/can-reach/workerd";
import { canReach as worklet } from "detect-conditions/_internal/can-reach/worklet";

export function detect() {
	const core = [];
	const runtime = [];
	const common = [];
	const webpack = [];

	// Core conditions
	if (moduleSync()) core.push("module-sync");
	if (nodeAddons()) core.push("node-addons");
	if (import_()) core.push("import");
	if (require_()) core.push("require");
	if (node()) core.push("node");
	if (default_()) core.push("default");

	// Runtime conditions
	if (kiesel()) runtime.push("kiesel");
	if (wasmer()) runtime.push("wasmer");
	if (moddable()) runtime.push("moddable");
	if (lagon()) runtime.push("lagon");
	if (arvancloud()) runtime.push("arvancloud");
	if (azion()) runtime.push("azion");
	if (fastly()) runtime.push("fastly");
	if (edgeRoutine()) runtime.push("edge-routine");
	if (edgeLight()) runtime.push("edge-light");
	if (reactServer()) runtime.push("react-server");
	if (netlify()) runtime.push("netlify");
	if (workerd()) runtime.push("workerd");
	if (reactNative()) runtime.push("react-native");
	if (electron()) runtime.push("electron");
	if (bun()) runtime.push("bun");
	if (deno()) runtime.push("deno");
	if (node()) runtime.push("node");

	// Common conditions
	if (development()) common.push("development");
	if (production()) common.push("production");
	if (module()) common.push("module");
	if (browser()) common.push("browser");
	if (default_()) common.push("default");

	// Webpack conditions
	if (worklet()) webpack.push("worklet");
	if (worker()) webpack.push("worker");
	if (reactNative()) webpack.push("react-native");
	if (electron()) webpack.push("electron");
	if (deno()) webpack.push("deno");
	if (browser()) webpack.push("browser");
	if (node()) webpack.push("node");

	return {
		core,
		runtime,
		common,
		webpack,
	};
}
