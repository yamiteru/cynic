import { Event, Maybe, TCallback} from "./types";
import { eventWith } from "./event";
import {kill} from "./kill";

const KILL = (_: any, this$: any) => kill(this$);

export function once<O>(subs?: Maybe<TCallback<O>[]>): Event<O> {
	return subs ? onceWith(subs): onceWithout();
}

export function onceWith<O>(subs: TCallback<O>[]): Event<O> {
	return eventWith([...subs, KILL]);
}

export function onceWithout<O>(): Event<O> {
	return eventWith([KILL]);
}