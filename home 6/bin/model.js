import { Database as DB } from "sqlite-async";
import TelegramBot from "node-telegram-bot-api";
const log = console.log;
export class Database {
  db = null;
  constructor(config) {
    this.config = config;
  }

  async start() {
    this.db = await DB.open(this.config.file);
    await this.createUsers();
    await this.createEvents();
  }

  async stop() {
    await this.db.close();
  }
  async createUsers() {
    let query = `CREATE TABLE IF NOT EXISTS Users (
            id              integer primary key autoincrement,
            telegram_url    text,
            telegram_id     integer unique not null,
            chat_id         integer unique not null,
            name            text
        )`;
    await this.db.exec(query);
  }

  async createEvents() {
    let query = `CREATE TABLE IF NOT EXISTS Events (
            id              integer primary key autoincrement,
            name            text not null,
            city            text not null,
            address         text,
            date            text not null,
            time            text,
            type            text,
            isRegular       integer,
            price           text,
            contact         text,
            org_id          integer not null,
            poster_url      text  
        )`;
    await this.db.exec(query);
  }

  // async test() {
  //   let query = `INSERT INTO Users (name, telegram_id, chat_id) VALUES (
  //           "Aidos", 123123123, 948641242185
  //       )`;
  //   try {
  //     await this.db.exec(query);
  //   } catch {
  //     log("Такой пользователь уже есть");
  //   }

  //   query = `INSERT INTO Events (name, city, date, org_id) VALUES (
  //           "Концерт Queen", "Астана", "2023-06-19", 1
  //       )`;
  //   try {
  //     await this.db.exec(query);
  //   } catch {
  //     log("Такое событие уже есть");
  //   }

  //   query = "SELECT * FROM Users";
  //   let rows = await this.db.all(query);
  //   log("Юзеры: ", rows);

  //   query = "SELECT * FROM Events";
  //   rows = await this.db.all(query);
  //   log("События: ", rows);
  // }

  async addUser(name1, telegram_id1, chat_id1) {
    log(name1, telegram_id1, chat_id1);
    let query;
    try {
      query = `INSERT INTO Users (name, telegram_id, chat_id) VALUES ("${name1}", "${telegram_id1}", "${chat_id1}")`;
      await this.db.exec(query);
      console.log(
        `Запись ${name1}, ${telegram_id1}, ${chat_id1} была успешно добавлена в таблицу Users.`
      );
    } catch (err) {
      console.error(`Ошибка при добавлении записи в таблицу Users: ${err}`);
    }
  }

  async addEvents(name2, city, date, org_id) {
    let query;
    try {
      query = `INSERT INTO Events (name, city, date, org_id) VALUES ("${name2}", "${city}", "${date}", "${org_id}")`;
      await this.db.exec(query);
      console.log(
        `Запись ${name2}, ${city}, ${date}, ${org_id} была успешно добавлена в таблицу Events.`
      );
    } catch (err) {
      console.error(`Ошибка при добавлении записи в таблицу Users: ${err}`);
    }
  }
}
