import { store } from "./store.js";
import { list } from "./store.js";
export const dispatcher = {
  dispatch(action) {
    console.log(action);
    if ((action.type = "INCREMENT")) {
      store.dispatch(action);
    }
    if ((action.type = "ADD")) {
      list.dispatch(action);
    }
  },
};
