import { SET } from "./symbols";
import {Event} from "./types";

export function clear<I, O>($event: Event<I, O>) {
	$event[SET].clear();
}