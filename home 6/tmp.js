import TelegramBot from "node-telegram-bot-api";
import { Database as DB } from "sqlite-async";
const log = console.log;

const db = await DB.open('./data.sql3');

let query = `CREATE TABLE IF NOT EXISTS Users (
    id integer primary key autoincrement,
    name text unique not null,
    nickname text,
    birthdate text
)`;
await db.exec(query);

query = `INSERT INTO Users (name, nickname, birthdate) VALUES (
    "Amir", "amir_is_the_best", "2001-03-24"
)`;
try { await db.exec(query); }
catch { log("Такой пользователь уже есть"); }


query = "SELECT * FROM Users";
let rows = await db.all(query);
log(rows);


db.close();







// const TOKEN = "6126105874:AAFRPVV8lOk105pQr3AbraEha9UjfXIfvsw";
// const bot = new TelegramBot(TOKEN, {polling: true});

// bot.on("text", msg => {
//     let chat_id, name_id, telegram_id;
//     switch(msg.text.toLocaleLowerCase()) {
//         case "/start":
//             chat_id = msg.chat.id;
//             break;
//         case "1" : 
//             chat_id = msg.message_id;
//             name_id = msg.from.first_name;
//             telegram_id = msg.from.id;
//             break;
//     }
//     console.log(chat_id, name_id, telegram_id)
//     // console.log(chat_id)
// });

// bot.on("callback_query", msg => {
//     console.log(msg);
// })
