import { SET } from "./symbols";

export type Callback<T> = (value: T) => void;

export type Channel<T, C extends Callback<T> = Callback<T>> = {
    [SET]: Set<C>;
};