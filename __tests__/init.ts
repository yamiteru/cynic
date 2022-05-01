import { event, eventWith, eventWithout } from "../src";
import {noop} from "../shared";

describe("Init", () => {
    it("should create empty event", () => {
        expect(event()).toBeDefined();
        expect(eventWithout()).toBeDefined();
    });

    it("should create non-empty event", () => {
        expect(event([noop])).toBeDefined();
        expect(eventWith([noop])).toBeDefined();
    });
});
