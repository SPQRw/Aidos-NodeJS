import { prompt } from "./moduleex.js";
// prompt("Сколько вам лет?")
// .then(Number)
// .then((val) => {
//   let userAge = val;
//   console.log(userAge)
// })
// .catch((error)=>{
//     console.log(error)
// });

async function f() {
  const first = await prompt("how old are you?");
  let userAge = Number(first);
  console.log(userAge);
}
f();
