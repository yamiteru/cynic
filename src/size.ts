import { SET } from "./symbols";
import { Channel } from "./types";

export const size = <T>(channel$: Channel<T>) => channel$[SET].size;