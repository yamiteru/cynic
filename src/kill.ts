import { clear } from "./clear";
import { Event } from "./types";

export function kill<O>(event$: Event<O>) {
	event$.alive = false;
	clear(event$);
}