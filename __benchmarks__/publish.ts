import {event, subscribe, publish} from "../src";
import { Subject } from "rxjs";
import {suite} from "./_shared";

const rxEvent = new Subject();
const cynicEvent = event();

[
	() => {},
	() => {},
	() => {},
	() => {},
	() => {},
	() => {},
	() => {},
	() => {},
	() => {},
	() => {},
].forEach((fn) => {
	rxEvent.subscribe(fn);
	subscribe(cynicEvent, fn);
});

export default suite()
	.add("RxJS", function () {
		rxEvent.next(0);
	})
	.add("Cynic", function () {
		publish(cynicEvent, 0);
	});