const EventEmitter = require("events");
let input;
class UserInput extends EventEmitter {
  constructor() {
    super();
    process.stdin.on("data", (data) => {
      input = data.toString().trim();
      if (input.startsWith("solve")) {
        this.emit("solve", input);
      } else if (input === "exit") {
        stop();
      } else {
        this.emit("input", input);
      }
    });
  }

  start() {
    console.log("Input listening started");
  }

  stop() {
    if (input == "exit") {
      console.log("Input listening stopped");
      process.stdin.pause();
    }
  }

  solve(input) {
    const expression = input.slice(1).trim();
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
  console.log(`Received input: ${input}`);
});
userInput.on("solve", () => {
  userInput.solve();
});
userInput.start();
