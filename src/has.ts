import {Event, TCallback} from "./types";

export function has<O>(event$: Event<O>, callback: TCallback<O>) {
	return event$.set ? hasUnsafe(event$, callback) : false;
}

export function hasUnsafe<O>(event$: Event<O>, callback: TCallback<O>) {
	return event$.set?.has(callback) || false;
}