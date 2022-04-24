import {event} from "../src";
import { Subject } from "rxjs";
import {suite} from "./_shared";

let e;

export default suite()
	.add("RxJS", function () {
		e = new Subject();
	})
	.add("Cynic", function () {
		e = event();
	});