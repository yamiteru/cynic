import {Event} from "./types";
import {clear} from "./clear";
import {ON_END} from "./symbols";

export function end<I, O>($event: Event<I, O>) {
	clear($event);
	$event[ON_END]?.();
}