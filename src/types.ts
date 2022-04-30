import {ON_CLEAR, SET} from "./symbols";

export type Either<L, R> = L | R;

export type Nullable<T> = Either<null, T>;

export type Maybe<T> = Either<undefined, Nullable<T>>;

export type Noop = () => void;

export type TCallback<T> = (value: T, this$: Event<T>) => void;

export type Event<T> = {
	[SET]: Either<false, Set<TCallback<T>>>;
	[ON_CLEAR]?: Noop;
};
