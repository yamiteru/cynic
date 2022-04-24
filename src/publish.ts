import {Event, TCallback} from "./types";
import {SET} from "./symbols";

export const publish = <O>(event$: Event<O>, value?: O) => {
    if(event$[SET]) for (const callback of (event$[SET] as Set<TCallback<O>>).values()) callback(value, event$);
}