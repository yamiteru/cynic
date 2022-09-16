import {Event, TCallback} from "./types";

export function publish<O>(event$: Event<O>, value?: O) {
    if(event$.set) publishUnsafe(event$, value);
}

export function publishUnsafe<O>(event$: Event<O>, value?: O) {
    for (const callback of (event$.set as Set<TCallback<O>>).values()) {
        callback(value as O, event$);
    }
}