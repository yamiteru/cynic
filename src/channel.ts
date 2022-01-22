import { SET } from "./symbols";
import { Callback } from "./types";

export const channel = <T, C extends Callback<T> = Callback<T>>(subs: C[] = []) => ({
    [SET]: new Set<C>(subs)
});