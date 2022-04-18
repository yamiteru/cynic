import {Event} from "./types";
import {READONLY} from "./symbols";
import {freeze} from "./freeze";

export function readonly<I, O>($event: Event<I, O>): Event<I, O> {
	return freeze({
		...$event,
		[READONLY]: true
	});
}