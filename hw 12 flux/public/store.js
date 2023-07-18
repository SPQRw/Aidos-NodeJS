import * as reducer from "./reducer.js";

function createStore(reducer) {
  let state = reducer();
  let listeners = [];

  function dispatch(action) {
    state = reducer(state, action);
    notifyListeners();
  }

  function notifyListeners() {
    listeners.forEach((listener) => {
      listener();
    });
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export const store = createStore(reducer.countReducer);
// Upd:      ^^^^^ лучше бы, конечно, его переименовать. в countStore, например. А то легко будет запутаться


/* VN: Здесь вам не нужна ещё одна функция listStore, которая ниже. Ведь она точно такая же, в ней нет смысла!
Всё что вам нужно, это написать: 

export const list = createStore(reducer.listReducer);   // и функция-редуктор у каждого store должен быть свой
*/

function listStore(reducer) {
  let state = reducer();
  let listeners = [];

  function dispatch(action) {
    state = reducer(state, action);
    notifyListeners();
  }

  function notifyListeners() {
    listeners.forEach((listener) => {
      listener();
    });
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export const list = listStore(reducer.countReducer);
