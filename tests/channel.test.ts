import { channel, clear, has, publish, size, subscribe } from "../src";

const noop1 = () => {};
const noop2 = () => {};

describe("channel", () => {
    it("subscribes external", () => {
        let count = 0;
        const channel$ = channel<string>();

        subscribe(channel$, () => count++);
        subscribe(channel$, () => count++);

        publish(channel$, "test");

        expect(count).toBe(2);
    });

    it("subscribes internal", () => {
        let count = 0;
        const channel$ = channel<string>([
            () => count++, 
            () => count++
        ]);

        publish(channel$, "test");

        expect(count).toBe(2);
    });

    it("unsubscribes", () => {
        const channel$ = channel();

        const unsub1 = subscribe(channel$, noop1);
        subscribe(channel$, noop2); 

        unsub1();

        expect(size(channel$)).toBe(1);
    });

    it("returns channel length", () => {
        const channel$ = channel();

        subscribe(channel$, noop1);
        subscribe(channel$, noop2);

        expect(size(channel$)).toBe(2);
    });

    it("clears channel", () => {
        const channel$ = channel();

        subscribe(channel$, noop1);
        subscribe(channel$, noop2);

        clear(channel$);

        expect(size(channel$)).toBe(0);
    });

    it("checks for subscriber", () => {
        const channel$ = channel();

        subscribe(channel$, noop1);
        subscribe(channel$, noop2);

        expect(has(channel$, noop1)).toBe(true);
    });

    it("doesn't resubscribe identical subscriber", () => {
        const channel$ = channel();

        subscribe(channel$, noop1);
        subscribe(channel$, noop1);
        
        expect(size(channel$)).toBe(1);
    });
});