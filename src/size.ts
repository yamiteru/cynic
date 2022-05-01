import { SET } from "./symbols";
import {Event, TCallback} from "./types";

export function size<O>(event$: Event<O>) {
	return event$[SET] ? sizeUnsafe(event$) : 0;
}

export function sizeUnsafe<O>(event$: Event<O>) {
	return (event$[SET] as Set<TCallback<O>>).size;
}
