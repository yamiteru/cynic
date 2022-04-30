import { TCallback, Event, Nullable } from "./types";
import {SET} from "./symbols";

export const event = <O>(subs?: Nullable<TCallback<O>[]>): Event<O> => ({
    [SET]: subs ? new Set(subs): false,
});
