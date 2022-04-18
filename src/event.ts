import {EMPTY, GET_END, MAP, SET, SET_END} from "./symbols";
import {TCallback, Event, Nullable, TMap} from "./types";
import {defaultMap} from "./defaultMap";
import {freeze} from "./freeze";

export function event<
    I,
    O = I,
    C extends TCallback<O> = TCallback<O>
>(
    map?: Nullable<TMap<I, O>>,
    subs: C[] = []
): Event<I, O, C> {
    map ??= defaultMap;

    let ended = false;
    return freeze({
        [SET]: new Set<C>(subs),
        [MAP]: map,
        [GET_END]: () => ended,
        [SET_END]: (value) => {
            ended = value;
        }
    });
}