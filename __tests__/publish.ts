import {event, publish, once} from "../src";

describe("Publish", () => {
	let first: any = null;
	let second: any = null;

	const input = [1, 2];

	it("should publish value multiple times", () => {
		const event$ = event([
			(v) => first = v,
			(v) => second = v,
		]);

		publish(event$, input[0]);

		expect(first).toBe(input[0]);
		expect(second).toBe(input[0]);

		publish(event$, input[1]);

		expect(first).toBe(input[1]);
		expect(second).toBe(input[1]);
	});

	it("should publish value only once", () => {
		const event$ = once([
			(v) => first = v,
			(v) => second = v,
		]);

		publish(event$, input[0]);

		expect(first).toBe(input[0]);
		expect(second).toBe(input[0]);

		publish(event$, input[1]);

		expect(first).toBe(input[0]);
		expect(second).toBe(input[0]);
	});

	it("should publish only to original subscribers", () => {
		let count = 0;

		const updateCount = () => ++count;
		const event$ = event([updateCount, updateCount]);

		publish(event$);

		expect(count).toBe(1);
	});
});
