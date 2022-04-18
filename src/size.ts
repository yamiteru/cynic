import { SET } from "./symbols";
import { Event } from "./types";

export function size<I, O>($event: Event<I, O>) {
	return $event[SET].size;
}