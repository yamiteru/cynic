import {event} from "./event";
import {Event, Nullable, TCallback, TMap} from "./types";
import {EMPTY} from "./symbols";
import {freeze} from "./freeze";

export function trigger<O, C extends TCallback<O> = TCallback<O>>(
	map?: Nullable<TMap<undefined, O>>,
	subs: C[] = []
): Event<undefined, O> {
	return freeze({
		...event<undefined, O>(map, subs),
		[EMPTY]: true
	});
}