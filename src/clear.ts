import {Event} from "./types";
import {ON_CLEAR, SET} from "./symbols";

export function clear<I, O>(event$: Event<O>) {
	event$[SET] = new Set();
	event$[ON_CLEAR]?.();
}