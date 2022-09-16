import { TCallback, Event } from "./types";

export function subscribe<O>(event$: Event<O>, callback: TCallback<O>) {
	if(event$.alive) {
		event$.set ??= new Set();
		return subscribeUnsafe(event$, callback);
	}
}

export function subscribeUnsafe<O>(event$: Event<O>, callback: TCallback<O>) {
	event$.set?.add(callback);

	return () => {
		event$.set?.delete(callback);
	};
}