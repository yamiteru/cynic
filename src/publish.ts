import {Event, TCallback} from "./types";
import {SET} from "./symbols";

export function publish<O>(event$: Event<O>, value?: O) {
    if(event$[SET]) publishUnsafe(event$, value);
}

export function publishUnsafe<O>(event$: Event<O>, value?: O) {
    for (const callback of (event$[SET] as Set<TCallback<O>>).values()) {
        callback(value as O, event$);
    }
}
