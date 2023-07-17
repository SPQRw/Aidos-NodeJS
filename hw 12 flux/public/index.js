import * as actions from "./actions.js";
import { dispatcher } from "./dispatcher.js";
import { countView } from "./view.js";
import { store } from "./store.js";

console.log(actions.types);
const incrementButton = document.getElementById("incr");
const decrementButton = document.getElementById("decr");
const clearButton = document.getElementById("clear");
const addButton = document.getElementById("add");

incrementButton.addEventListener("click", () => {
  dispatcher.dispatch(actions.increment());
  let counter = new countView(store);
});

decrementButton.addEventListener("click", () => {
  dispatcher.dispatch(actions.decrement());
  let counter = new countView(store);
});

clearButton.addEventListener("click", () => {
  dispatcher.dispatch(actions.clear());
  let counter = new countView(store);
});

addButton.addEventListener("click", () => {
  dispatcher.dispatch(actions.add());
});
