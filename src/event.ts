import {TCallback, Event} from "./types";
import {SET} from "./symbols";

export function event<O>(subs?: TCallback<O>[]): Event<O> {
    return {
        [SET]: subs && new Set(subs),
    };
}