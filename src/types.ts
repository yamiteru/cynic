import {EMPTY, MAP, SET} from "./symbols";

export type Either<L, R> = L | R;

export type Nullable<T> = Either<null, T>;

export type TCallback<T> = (value: T) => void;

export type TMap<I, O> = (value: I) => O | undefined;

export type Event<I, O = I, C extends TCallback<O> = TCallback<O>> = Readonly<{
    [SET]: Set<C>;
    [MAP]: TMap<I, O>;
    [EMPTY]?: boolean;
}>;