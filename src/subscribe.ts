import { SET } from "./symbols";
import { TCallback, Event } from "./types";

export function subscribe<I, O, C extends TCallback<O> = TCallback<O>>($event: Event<I, O, C>, callback: C) {
	$event[SET].add(callback);

	return () => {
		$event[SET].delete(callback);
	};
}