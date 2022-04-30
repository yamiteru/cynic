import { TCallback, Event, Maybe } from "./types";
import {SET} from "./symbols";

const emptyEvent = {
    [SET]: false
};

function fullEvent<O>(subs: TCallback<O>[]) {
    return { [SET]: new Set(subs) };
};

export function event<O>(subs?: Maybe<TCallback<O>[]>): Event<O> {
    return Object.create(subs ? fullEvent(subs): emptyEvent);
}
