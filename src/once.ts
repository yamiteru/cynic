import {Event, TCallback} from "./types";
import {event} from "./event";
import {clear} from "./clear";

export const once = <O>(subs: TCallback<O>[] = []): Event<O> =>
	event<O>([...subs, (_, this$) => clear(this$)]);