import { SET } from "./symbols";
import {Event, TCallback} from "./types";

export const size = <O>(event$: Event<O>) => event$[SET]
	? (event$[SET] as Set<TCallback<O>>).size
	: 0;