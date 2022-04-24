import {event} from "./event";
import {publish} from "./publish";
import {ON_CLEAR} from "./symbols";
import {Event, TCallback} from "./types";
import {EventEmitter} from "events";

export function fromEmitter<O>(
	emitter: EventEmitter,
	type: string,
	subs: TCallback<O>[] = []
): Event<O> {
	const $event = event<O>(subs);
	const callback = (v) => publish($event, v);

	emitter.addListener(type, callback);

	return {
		...$event,
		[ON_CLEAR]: () => emitter.removeListener(type, callback)
	};
}