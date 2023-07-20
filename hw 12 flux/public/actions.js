export const types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CLEAR: "CLEAR",
  ADD: "ADD",
};

/* VN: 
Чтобы диспетчер имел возможность направлять события в разные store, ему нужно знать, откуда пришло событие.
Для этого самый лучший вариант - прописать источник прямо в теле события, см ниже: 
*/

// export const sources = {
//   COUNTER: "COUNTER",
//   LIST: "LIST"
// } 

export function increment() {
  return {
    // source: sources.COUNTER,
    type: types.INCREMENT,
  };
}

export function decrement() {
  return {
    // source: sources.COUNTER,
    type: types.DECREMENT,
  };
}

export function clear() {
  return {
    // source: sources.LIST,
    type: types.CLEAR,
  };
}

export function add() {
  return {
    // source: sources.LIST,
    type: types.ADD,
  };
}

/* VN:
А самый лучший вариант, на мой взгляд, - если передавать source в функцию как аргумент, по типу такого:

export function add(source) {
  return {
    source: source,
    type: types.ADD
  };
}

И тогда можно делать события с одинаковым именем, но из разных источников.
В index.js только изменения не забыть внести.
*/