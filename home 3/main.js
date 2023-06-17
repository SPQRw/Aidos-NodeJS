const EventEmitter = require("events");
let input;
class UserInput extends EventEmitter {
  constructor() {
    super();
    process.stdin.on("data", (data) => {
      input = data.toString().trim();
      if (input.startsWith("solve")) {
        this.solve(input);
      } else if (input == "exit") {
        this.stop();
      } else {
        this.emit("input", input);
      }
    });
  }

  start() {
    console.log("Введите что нибудь");
  }

  stop() {
    console.log("Ввод данных остановлен");
    process.stdin.pause();
  }

  solve(input) {
    const expression = input.slice(6).trim();
    const result = eval(expression);
    if (typeof result === "number" && isFinite(result)) {
      console.log(result);
    } else {
      console.log("Не могу вычислить");
    }
  }
}

const userInput = new UserInput();
userInput.on("input", (input) => {
  console.log(`Вывод: ${input}`);
});
userInput.on("solve", () => {
  userInput.solve();
});
userInput.start();
