import { SET } from "./symbols";
import { Callback, Channel } from "./types";

export const has = <T, C extends Callback<T>>(channel$: Channel<T, C>, callback: C) => channel$[SET].has(callback);