export type Either<L, R> = L | R;

export type Nullable<T> = Either<null, T>;

export type Maybe<T> = Either<undefined, Nullable<T>>;

export type TCallback<T> = (value: T, this$: Event<T>) => void;

export type Event<T> = {
	alive: boolean;
	set: Either<null, Set<TCallback<T>>>;
};