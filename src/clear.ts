import { SET } from "./symbols";
import { Channel } from "./types";

export const clear = <T>(channel$: Channel<T>) => channel$[SET].clear();