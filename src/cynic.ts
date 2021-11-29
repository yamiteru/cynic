type Callback<T> = (v: T) => void;

export const cynic = <T, C extends Callback<T> = Callback<T>>(subs: C[] = []) => {
    const set = new Set<C>(subs);

    return {
        pub: (v: T) => {
            for (const cb of set.values()) cb(v)
        },
        sub: (cb: C) => {
            set.add(cb);
            return () => {
                set.delete(cb);
            };
        },
        lng: () => set.size,
        has: (cb: C) => set.has(cb),
        clr: () => set.clear()
     } as const;
};