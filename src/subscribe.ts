import { TCallback, Event } from "./types";
import {SET} from "./symbols";

export function subscribe<O>(event$: Event<O>, callback: TCallback<O>) {
	if(!event$[SET]) event$[SET] = new Set();
	return subscribeUnsafe(event$, callback);
}

export function subscribeUnsafe<O>(event$: Event<O>, callback: TCallback<O>) {
	(event$[SET] as Set<TCallback<O>>).add(callback);

	return () => {
		(event$[SET] as Set<TCallback<O>>).delete(callback);
	};
}
