import {TCallback, Event} from "./types";
import {SET} from "./symbols";

export const event = <O>(subs?: TCallback<O>[]): Event<O> => ({
    [SET]: subs ? new Set(subs): false,
});