import {event} from "../src";
import {noop} from "../shared";

describe("Init", () => {
    it("should create empty event", () => {
        expect(event()).toBeDefined();
    });

    it("should create non-empty event", () => {
        expect(event([noop])).toBeDefined();
    });
});