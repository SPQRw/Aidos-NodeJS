import { prompt } from "./moduleex.js";
prompt("Сколько вам лет?").then((val) => {
  process.stdout.write(val);
});
