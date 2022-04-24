import {event, subscribe, once} from "../src";
import {noop} from "../shared";

describe("Subscribe", () => {
	it("should add internal subscriber", () => {
		expect(event([noop])).toBeDefined();
	});

	it("should add external subscriber", () => {
		const event1$ = event();
		const unsub1 = subscribe(event1$, noop);

		expect(unsub1).toBeDefined();

		const event2$ = once();
		const unsub2 = subscribe(event2$, noop);

		expect(unsub2).toBeDefined();
	});
});