import init from "./init";
import subscribe from "./subscribe";
import publish from "./publish";
import remove from "./remove";
import {run} from "./_shared";

run({
	"Init": init,
	"Subscribe": subscribe,
	"Publish": publish,
	"Remove": remove
});