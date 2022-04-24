import {Event, TCallback} from "./types";
import {event} from "./event";
import {clear} from "./clear";

export function once<O>(subs: TCallback<O>[] = []): Event<O> {
	return event<O>([...subs, (_, this$) => clear(this$)]);
}