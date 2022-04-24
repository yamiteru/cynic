import {event, subscribe} from "../src";
import { Subject } from "rxjs";
import {suite} from "./_shared";
import {noop} from "../shared";

const rxEvent = new Subject();
const cynicEvent = event();

export default suite()
	.add("RxJS", function () {
		const sub = rxEvent.subscribe(noop);
		sub.unsubscribe();
	})
	.add("Cynic", function () {
		const unsub = subscribe(cynicEvent, noop);
		unsub();
	});