export function freeze<T extends Record<any, any>>(obj: T): Readonly<T> {
	return Object.freeze(obj);
}