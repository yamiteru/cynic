import { SET } from "./symbols";
import { Channel } from "./types";

export const publish = <T>(channel$: Channel<T>, value: T) => {
    for (const callback of channel$[SET].values()) callback(value);
};