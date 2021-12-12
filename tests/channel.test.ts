import { channel } from "../src";

const noop1 = () => {};
const noop2 = () => {};

describe("channel", () => {
    it("subscribes external", () => {
        let count = 0;
        const channel$ = channel<string>();

        channel$.sub(() => count++);
        channel$.sub(() => count++);

        channel$.pub("test");

        expect(count).toBe(2);
    });

    it("subscribes internal", () => {
        let count = 0;
        const channel$ = channel<string>([
            () => count++, 
            () => count++
        ]);

        channel$.pub("test");

        expect(count).toBe(2);
    });

    it("unsubscribes", () => {
        const channel$ = channel();

        const unsub1 = channel$.sub(noop1);
        channel$.sub(noop2); 

        unsub1();

        expect(channel$.lng()).toBe(1);
    });

    it("returns channel length", () => {
        const channel$ = channel();

        channel$.sub(noop1);
        channel$.sub(noop2);

        expect(channel$.lng()).toBe(2);
    });

    it("clears channel", () => {
        const channel$ = channel();

        channel$.sub(noop1);
        channel$.sub(noop2);

        channel$.clr();

        expect(channel$.lng()).toBe(0);
    });

    it("checks for subscriber", () => {
        const channel$ = channel();

        channel$.sub(noop1);
        channel$.sub(noop2);

        expect(channel$.has(noop1)).toBe(true);
    });

    it("doesn't resubscribe identical subscriber", () => {
        const channel$ = channel();

        channel$.sub(noop1);
        channel$.sub(noop1);
        
        expect(channel$.lng()).toBe(1);
    });
});