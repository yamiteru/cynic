import { SET } from "./symbols";
import {Event, TCallback} from "./types";

export function has<O>(event$: Event<O>, callback: TCallback<O>) {
	return event$[SET]
		? (event$[SET] as Set<TCallback<O>>).has(callback)
		: false;
}
