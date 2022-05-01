import { TCallback, Event, Maybe } from "./types";
import {SET} from "./symbols";

const WITHOUT = {
    [SET]: false
};

function WITH<O>(subs: TCallback<O>[]) {
    return { [SET]: new Set(subs) };
};

export function eventWithout<O>(): Event<O> {
    return Object.create(WITHOUT);
}

export function eventWith<O>(subs: TCallback<O>[]): Event<O> {
    return Object.create(WITH(subs));
}

export function event<O>(subs?: Maybe<TCallback<O>[]>): Event<O> {
    return subs ? eventWith(subs): eventWithout();
}
