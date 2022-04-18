import {event} from "./event";
import {Nullable, TCallback, TMap} from "./types";
import {EMPTY} from "./symbols";

export function trigger<O, C extends TCallback<O> = TCallback<O>>(
	map?: Nullable<TMap<undefined, O>>,
	subs: C[] = []
) {
	return Object.freeze({
		...event<undefined, O>(map, subs),
		[EMPTY]: true
	});
}