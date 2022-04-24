import {event} from "./event";
import {publish} from "./publish";
import {ON_CLEAR} from "./symbols";
import {Event, TCallback} from "./types";

export function fromTarget<O>(
	target: EventTarget,
	type: string,
	subs: TCallback<O>[] = []
): Event<O> {
	const $event = event<O>(subs);
	const callback = (v) => publish($event, v);

	target.addEventListener(type, callback);

	return {
		...$event,
		[ON_CLEAR]: () => target.removeEventListener(type, callback)
	};
}