import * as actions from "./actions.js";
import { dispatcher } from "./dispatcher.js";
import { countView } from "./view.js";
import { listView } from "./view.js";
import { store } from "./store.js";

console.log(actions.types);
const incrementButton = document.getElementById("incr");
const decrementButton = document.getElementById("decr");
const clearButton = document.getElementById("clear");
const addButton = document.getElementById("add");

/* VN:
Создать компоненты view нужно всего лишь один раз, и связать их с нужным store

import { store, list } from "./store.js";
let counter = new countView(store);
let counter = new listView(list); 
  
А в обработчиках событий НЕ создавайте их!
*/

incrementButton.addEventListener("click", () => {
  dispatcher.dispatch(actions.increment());
  let counter = new countView(store);         // не здесь
});

decrementButton.addEventListener("click", () => {
  dispatcher.dispatch(actions.decrement());
  let counter = new countView(store);         // не здесь
});

clearButton.addEventListener("click", () => {
  dispatcher.dispatch(actions.clear());
  let counter = new countView(store);         // не тут
});

addButton.addEventListener("click", () => {
  dispatcher.dispatch(actions.add());
  let counter = new listView(store);         // и не тут
});
