import { TCallback, Event } from "./types";
import {SET} from "./symbols";

export const subscribe = <O>(event$: Event<O>, callback: TCallback<O>) => {
	(event$[SET] || (event$[SET] = new Set())).add(callback);
	return () => (event$[SET] as Set<TCallback<O>>).delete(callback);
}