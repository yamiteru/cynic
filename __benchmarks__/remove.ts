import {event, subscribe} from "../src";
import { Subject } from "rxjs";
import {suite} from "./_shared";
import {noop} from "../shared";

const rxEvent = new Subject();
const cynicEvent = event();

(() => {
	console.log("# remove");

	suite()
		.add("RxJS", function () {
			rxEvent.subscribe(noop).unsubscribe();
		})
		.add("Cynic", function () {
			subscribe(cynicEvent, noop)();
		})
 		.run();
	}
)();
