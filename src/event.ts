import { TCallback, Event, Maybe } from "./types";

const WITHOUT: Event<any> = {
		alive: true,
    set: null
};

function WITH<O>(subs: TCallback<O>[]) {
    return { alive: true, set: new Set(subs) };
}

export function eventWithout<O>(): Event<O> {
    return Object.create(WITHOUT);
}

export function eventWith<O>(subs: TCallback<O>[]): Event<O> {
    return Object.create(WITH(subs));
}

export function event<O>(subs?: Maybe<TCallback<O>[]>): Event<O> {
    return subs ? eventWith(subs): eventWithout();
}