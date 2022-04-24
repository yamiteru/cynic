import { Suite } from "benchmark";
import mitt from "mitt";
import {event} from "../src";
import Emittery from "emittery";
import createPubSub from "nano-pubsub";

export default () => new Suite("Create One")
	.add("Mitt", () => {
		mitt();
	})
	.add("Emittery", () => {
		new Emittery();
	})
	.add("Nano-pubsub", () => {
		createPubSub();
	})
	.add("Cynic", () => {
		event();
	})
	.on("cycle", (event) => {
		console.log(String(event.target));
	})
	.on("complete", function() {
		console.log("Fastest is " + this.filter("fastest").map("name"));
	})
	.run();