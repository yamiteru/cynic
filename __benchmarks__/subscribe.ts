import {event, subscribe} from "../src";
import { Subject } from "rxjs";
import {suite} from "./_shared";
import {noop} from "../shared";

const rxEvent = new Subject();
const cynicEvent = event();

export default suite()
	.add("RxJS", function () {
		rxEvent.subscribe(noop);
	})
	.add("Cynic", function () {
		subscribe(cynicEvent, noop);
	})