export class countView {
  constructor(store) {
    this.store = store;
    this.store.subscribe(this.render);
    this.render();
  }

  render = () => {
    const countElement = document.querySelector(".number");
    countElement.textContent = this.store.getState().count.toString();
  };
}

export class listView {
  constructor(store) {
    this.store = store;
    this.store.subscribe(this.render);
    this.render();
  }

  render = () => {
    const addElement = document.querySelector(".list");
    const list = document.createElement("li");
    list.textContent = "Hello world";
    addElement.appendChild(list);
  };
}
