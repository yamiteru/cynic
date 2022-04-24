import { SET } from "./symbols";
import {Event, TCallback} from "./types";

export const has = <O>(event$: Event<O>, callback: TCallback<O>) => event$[SET]
	? (event$[SET] as Set<TCallback<O>>).has(callback)
	: false;