import { SET } from "./symbols";
import { Callback, Channel } from "./types";

export const subscribe = <T = any, C extends Callback<T> = Callback<T>>(channel$: Channel<T, C>, callback: C) => (
    channel$[SET].add(callback),
    (() => { channel$[SET].delete(callback); })
);