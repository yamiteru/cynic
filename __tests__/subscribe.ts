import { event, subscribe, once, eventWith, subscribeUnsafe } from "../src";
import {noop} from "../shared";

describe("Subscribe", () => {
	it("should add internal subscriber", () => {
		expect(event([noop])).toBeDefined();
		expect(eventWith([noop])).toBeDefined();
	});

	it("should add external subscriber", () => {
		const event1$ = event();
		const e1unsub1 = subscribe(event1$, noop);
		const e1unsub2 = subscribeUnsafe(event1$, noop);

		expect(e1unsub1).toBeDefined();
		expect(e1unsub2).toBeDefined();

		const event2$ = once();
		const e2unsub1 = subscribe(event2$, noop);
		const e2unsub2 = subscribeUnsafe(event2$, noop);

		expect(e2unsub1).toBeDefined();
		expect(e2unsub2).toBeDefined();
	});
});
