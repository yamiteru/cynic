import {event, has, size} from "../src";
import {noop} from "../shared";

describe("Other", () => {
	it("should check if subscriber exists", () => {
		const event1$ = event([noop]);
		expect(has(event1$, noop)).toBe(true);

		const event2$ = event();
		expect(has(event2$, noop)).toBe(false);
	});

	it("should return number of subscribers", () => {
		const event1$ = event([noop]);
		expect(size(event1$)).toBe(1);

		const event2$ = event();
		expect(size(event2$)).toBe(0);
	});
});