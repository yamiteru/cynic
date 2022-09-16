import {Event} from "./types";

export function size<O>(event$: Event<O>) {
	return event$.set ? sizeUnsafe(event$) : 0;
}

export function sizeUnsafe<O>(event$: Event<O>) {
	return event$.set?.size || 0;
}