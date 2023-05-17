import { event, subscribe, publish, clear, subscribeUnsafe } from "../src";

describe("Remove", () => {
	it("should remove one subscriber", () => {
		let count = 0;

		const event$ = event();
		const unsub1 = subscribe(event$, () => ++count);
		const unsub2 = subscribeUnsafe(event$, () => ++count);

		publish(event$);

		unsub1?.();
		unsub2();

		publish(event$);

		expect(count).toBe(2);
	});

	it("should remove all subscribers", () => {
		let count = 0;

		const event$ = event([
			() => ++count,
			() => ++count,
		]);

		publish(event$);

		clear(event$);

		publish(event$);

		expect(count).toBe(2);
	});
});