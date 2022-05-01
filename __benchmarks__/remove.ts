import { eventWithout, subscribe, subscribeUnsafe } from "../src";
import { Subject } from "rxjs";
import {suite} from "./_shared";
import {noop} from "../shared";

const rxEvent = new Subject();
const cynicEvent = eventWithout();

rxEvent.subscribe(noop).unsubscribe();
subscribe(cynicEvent, noop)();

(() => {
	console.log("# remove");

	suite()
		.add("RxJS", function () {
			rxEvent.subscribe(noop).unsubscribe();
		})
		.add("Cynic", function () {
			subscribeUnsafe(cynicEvent, noop)();
		})
 		.run();
	}
)();
