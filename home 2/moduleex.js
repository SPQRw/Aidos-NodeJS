export function prompt(message) {
  console.log(message);
  return new Promise((resolve) => {
    process.stdin.on("data", (data) => {
      let userAge = data.toString();
      resolve("your age is " + userAge);
    });
  });
}
