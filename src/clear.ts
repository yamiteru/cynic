import {Event} from "./types";
import {SET} from "./symbols";

export function clear<I, O>(event$: Event<O>) {
	event$[SET] = new Set();
}
