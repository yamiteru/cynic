import { SET } from "./symbols";
import {Event, TCallback} from "./types";

export function has<O>(event$: Event<O>, callback: TCallback<O>) {
	return event$[SET] ? hasUnsafe(event$, callback) : false;
}

export function hasUnsafe<O>(event$: Event<O>, callback: TCallback<O>) {
	return (event$[SET] as Set<TCallback<O>>).has(callback);
}
