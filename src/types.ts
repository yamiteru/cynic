import {EMPTY, GET_END, MAP, ON_END, READONLY, SET, SET_END} from "./symbols";

export type Either<L, R> = L | R;

export type Nullable<T> = Either<null, T>;

export type Noop = () => void;

export type TCallback<T> = (value: T) => void;

export type TMap<I, O> = (value: I) => O | undefined;

export type Event<I, O = I, C extends TCallback<O> = TCallback<O>> = Readonly<{
    [SET]: Set<C>;
    [MAP]: TMap<I, O>;
    [GET_END]: () => boolean;
    [SET_END]: (value: boolean) => void;
    [ON_END]?: Noop;
    [EMPTY]?: boolean;
    [READONLY]?: boolean;
}>;