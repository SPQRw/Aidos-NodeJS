export const types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CLEAR: "CLEAR",
  ADD: "ADD",
};

export function increment() {
  return {
    type: types.INCREMENT,
  };
}

export function decrement() {
  return {
    type: types.DECREMENT,
  };
}

export function clear() {
  return {
    type: types.CLEAR,
  };
}

export function add() {
  return {
    type: types.ADD,
  };
}
