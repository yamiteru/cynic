import {event, subscribe, publish, clear} from "../src";

describe("Remove", () => {
	it("should remove one subscriber", () => {
		let count = 0;

		const event$ = event();
		const unsub = subscribe(event$, () => ++count);

		publish(event$);

		unsub();

		publish(event$);

		expect(count).toBe(1);
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