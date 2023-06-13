export function prompt(message) {
  return new Promise((resolve) => {
    process.stdin.once("data", (data) => {
      let uAge = data.toString().trim();
      resolve(uAge);
      process.stdin.pause();
    });
    process.stdout.write(message);
  });
}
