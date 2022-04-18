import {EMPTY, MAP, SET} from "./symbols";
import { Event } from "./types";

export function publish<I, O>($event: Event<I, O>, value?: I) {
    const mappedValue = $event[MAP](value);

    if(!!$event[EMPTY] || mappedValue !== undefined) {
        for (const callback of $event[SET].values()) {
            callback(mappedValue);
        }
    }
}