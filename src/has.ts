import { SET } from "./symbols";
import {Event, TCallback} from "./types";

export function has<I, O, C extends TCallback<O> = TCallback<O>>($event: Event<I, O, C>, callback: C){
	return $event[SET].has(callback);
}