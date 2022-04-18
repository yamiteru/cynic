import {EMPTY, MAP, SET} from "./symbols";
import {TCallback, Event, Nullable, TMap} from "./types";
import {defaultMap} from "./defaultMap";

export function event<
    I,
    O = I,
    C extends TCallback<O> = TCallback<O>
>(
    map?: Nullable<TMap<I, O>>,
    subs: C[] = []
): Event<I, O, C> {
    map ??= defaultMap;

    return Object.freeze({
        [SET]: new Set<C>(subs),
        [MAP]: map
    });
}