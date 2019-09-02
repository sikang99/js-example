// --- main.js
import * as Comlink from "https://unpkg.com/comlink?module";

const worker = new Worker("worker.js", { type: "module" });
// This `state` variable actually lives in the worker!
//const state = await Comlink.wrap(worker);
const state = Comlink.wrap(worker);
//await state.inc();
state.inc();
console.log(state.currentCount);
