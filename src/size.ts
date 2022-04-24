import { SET } from "./symbols";
import {Event, TCallback} from "./types";

export function size<O>(event$: Event<O>) {
	return (event$[SET] as Set<TCallback<O>>)?.size || 0;
}