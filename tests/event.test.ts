import { event, clear, has, publish, size, subscribe } from "../src";
import {trigger} from "../src/trigger";
import {from} from "../src/from";
import {end} from "../src/end";
import {readonly} from "../src/readonly";
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
        const event$ = event<string>(null, [
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

    it("maps input value to output", () => {
        let output = null;
        const input = 10;
        const $event = event<number, string>((v) => `${v}`);

        subscribe($event, (v) => output = v);
        publish($event, input);

        expect(output).toBe(`${input}`);
    });

    it("validates input with map", () => {
        let output = null;
        const input = 7;
        const $event = event<number>((v) => v >= 0 ? v: undefined);

        subscribe($event, (v) => output = v);
        publish($event, input);
        publish($event, -5);

        expect(output).toBe(input);
    });

    it("triggers without any data", () => {
        let count = 0;
        const $trigger = trigger();

        subscribe($trigger, () => {
            count += 1;
        });

        publish($trigger);
        publish($trigger);
        publish($trigger);

        expect(count).toBe(3);
    });

    it("create event from EventTarget", () => {
        let output = null;
        const input = 1;
        const emitter = new EventEmitter();
        const type = "test";
        const $event = from<number>(emitter, type);

        subscribe($event, (v) => output = v);

        emitter.emit(type, input);

        end($event);

        emitter.emit(type, 2);

        expect(output).toBe(input);
    });

    it("does not publish on readonly", () => {
        let output = null;
        const input = 1;
        const $event = readonly(event<number>(null, [(v) => output = v]));

        publish($event, input);

        expect(output === input).toBe(false);
    });
});