import {event} from "../src";
import { Subject } from "rxjs";
import {suite} from "./_shared";

(() => {
	console.log("# init");

	suite()
		.add("RxJS", function () {
			new Subject();
		})
		.add("Cynic", function () {
			event();
		})
 		.run();
	}
)();
