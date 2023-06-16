// import { TelegramBot } from "node-telegram-bot-api";
import { Database } from "sqlite-async";
const log = console.log;

// let button = document.querySelector("btn");
// button.onclick = function () {
//   log("hi");
//   let nameP = document.getElementById("name");
//   let nicknameP = document.getElementById("nickname");
//   log(nameP.value, nicknameP.value);
// };
const db = await Database.open("./data.sql3");

let query = `CREATE TABLE IF NOT EXISTS Users (
    id integer primary key autoincrement,
    name text not null,
    nickname text,
    birthdate text
)`;
await db.exec(query);

query = `INSERT INTO Users (name,nickname,birthdate) VALUES(
    "Amir", "amir_is_the_best", "2001-03-24"
)`;

try {
  await db.exec(query);
} catch {
  log("Already has");
}

query = "SELECT * FROM Users";
let rows = await db.all(query);
log(rows);

db.close();
