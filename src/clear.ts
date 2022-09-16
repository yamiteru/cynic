import {Event} from "./types";

export function clear<I, O>(event$: Event<O>) {
	event$.set = null;
}