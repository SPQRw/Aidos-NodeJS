import { store } from "./store.js";

export const dispatcher = {
  dispatch(action) {
    console.log(action);
    store.dispatch(action);
  },
};
