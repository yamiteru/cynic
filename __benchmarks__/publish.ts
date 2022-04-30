import {event, subscribe, publish} from "../src";
import { Subject } from "rxjs";
import {suite} from "./_shared";
import { noop } from "../shared";

const rxEvent = new Subject();
const cynicEvent = event();

rxEvent.subscribe(noop);
subscribe(cynicEvent, noop);

(() => {
	console.log("# publish");

	suite()
		.add("RxJS", function () {
			rxEvent.next(0);
		})
		.add("Cynic", function () {
			publish(cynicEvent, 0);
		})
 		.run();
	}
)();
