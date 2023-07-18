import { store } from "./store.js";
import { list } from "./store.js";
// VN: Если из одного источника, то можно в одну строку
// import { list, store } from "./store.js";
export const dispatcher = {
  dispatch(action) {
    console.log(action);
    if ((action.type = "INCREMENT")) {   
      // VN:        ^^^ здесь у вас не проверка, а присваивание. И ниже тоже.
      store.dispatch(action);
    }
    if ((action.type = "ADD")) {
      list.dispatch(action);
    }
  },
};

/* VN:
Если в самом событии есть поле source, который показывает, откуда пришло событие, то диспетчер
сможет его направить в нужный store. Код диспетчера тогда выглядел бы так:
*/
// import { sources } from "./actions.js";

// export const dispatcher = {
//   dispatch(action) {
//     console.log(action);

//     switch(action.source) {
//       case sources.COUNTER:   store.dispatch(action); break;
//       case sources.LIST:      list.dispatch(action);  break;
//       default:  console.error("Unknown source!");
//     }

//   },
// };
