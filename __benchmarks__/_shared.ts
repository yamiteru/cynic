import {Suite} from "benchmark";

export function suite() {
	return new Suite()
		.on("cycle", function cycle(e) {
			console.log(e.target.toString());
		})
		.on("complete", function completed() {
			console.log(`=> ${this.filter("fastest").map("name")[0]}`);
			console.log("");
		})
}

export function run(suites: Record<string, Suite>) {
	for(const name in suites) {
		console.log(`# ${name}`);
		suites[name].run();
	}
}