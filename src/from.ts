import {event} from "./event";
import {publish} from "./publish";
import {ON_END} from "./symbols";
import {Nullable, TCallback, TMap} from "./types";
import {readonly} from "./readonly";
import {EventEmitter} from "events";

export function from<
	I,
	O = I,
	C extends TCallback<O> = TCallback<O>
>(
	target: EventTarget | EventEmitter,
	type: string,
	map?: Nullable<TMap<I, O>>,
	subs: C[] = []
) {
	const isEventTarget = target instanceof EventTarget;
	const $event = event<I, O, C>(map, subs);
	const callback = (v) => publish($event, v);

	target[isEventTarget ? "addEventListener": "addListener"](type, callback);

	return readonly({
		...$event,
		[ON_END]: () => {
			target[isEventTarget ? "removeEventListener": "removeListener"](type, callback);
		}
	});
}