import { Event, Maybe, TCallback} from "./types";
import { eventWith } from "./event";
import {clear} from "./clear";

const CLEAR = (_: any, this$: any) => clear(this$);

export function once<O>(subs?: Maybe<TCallback<O>[]>): Event<O> {
	return subs ? onceWith(subs): onceWithout();
}

export function onceWith<O>(subs: TCallback<O>[]): Event<O> {
	return eventWith([...subs, CLEAR]);
}

export function onceWithout<O>(): Event<O> {
	return eventWith([CLEAR]);
}
