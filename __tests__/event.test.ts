import {clear, event, has, publish, size, subscribe, fromEmitter} from "../src";
import {EventEmitter} from "events";

const noop1 = () => {};
const noop2 = () => {};

describe("event", () => {
    it("subscribes external", () => {
        let count = 0;
        const event$ = event<string>();

        subscribe(event$, () => count++);
        subscribe(event$, () => count++);

        publish(event$, "test");

        expect(count).toBe(2);
    });

    it("subscribes internal", () => {
        let count = 0;
        const event$ = event<string>([
            () => count++, 
            () => count++
        ]);

        publish(event$, "test");

        expect(count).toBe(2);
    });

    it("unsubscribes", () => {
        const event$ = event();

        const unsub1 = subscribe(event$, noop1);
        subscribe(event$, noop2);

        unsub1();

        expect(size(event$)).toBe(1);
    });

    it("returns channel length", () => {
        const event$ = event();

        subscribe(event$, noop1);
        subscribe(event$, noop2);

        expect(size(event$)).toBe(2);
    });

    it("clears channel", () => {
        const event$ = event();

        subscribe(event$, noop1);
        subscribe(event$, noop2);

        clear(event$);

        expect(size(event$)).toBe(0);
    });

    it("checks for subscriber", () => {
        const event$ = event();

        subscribe(event$, noop1);
        subscribe(event$, noop2);

        expect(has(event$, noop1)).toBe(true);
    });

    it("doesn't resubscribe identical subscriber", () => {
        const event$ = event();

        subscribe(event$, noop1);
        subscribe(event$, noop1);
        
        expect(size(event$)).toBe(1);
    });

    it("triggers without any data", () => {
        let count = 0;
        const $event = event<undefined>();

        subscribe($event, () => {
            count += 1;
        });

        publish($event);
        publish($event);
        publish($event);

        expect(count).toBe(3);
    });

    it("create event from EventEmitter", () => {
        let output = null;
        const input = 1;
        const emitter = new EventEmitter();
        const type = "test";
        const $event = fromEmitter<number>(emitter, type);

        subscribe($event, (v) => output = v);

        emitter.emit(type, input);

        clear($event);

        emitter.emit(type, 2);

        expect(output).toBe(input);
    });
});