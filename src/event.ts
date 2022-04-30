import { TCallback, Event, Maybe } from "./types";
import {SET} from "./symbols";

export const event = <O>(subs?: Maybe<TCallback<O>[]>): Event<O> => ({
    [SET]: subs ? new Set(subs): false,
});
