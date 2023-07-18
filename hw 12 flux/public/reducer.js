import { types } from "./actions.js";

const initialState = { count: 0 };
const listState = {
  list: [],
};
export function countReducer(state, action) {
  console.log("countReducer()", action);
  if (!action) return state;
  switch (action.type) {
    case types.INCREMENT:
      console.log("increment");
      state = initialState;
      return { count: state.count + 1 };
    case types.DECREMENT:
      console.log("decrement");
      state = initialState;
      return { count: state.count - 1 };
    case types.CLEAR:
      console.log("clear");
      state = initialState;
      return { count: (state.count = 0) };
    case types.ADD:
      console.log("add");
      state = listState;
      return { count: state.list.push() };
    default:
      return state;
  }
}
