import { Database as DB } from "sqlite-async";
// const db = await DB.open("./data.sql3");

export class DataStorage {
  db = null;
  constructor(database) {
    this.database = database;
  }
  start() {
    this.db = DB.open(this.database.file);
    this.CreateUsers();
    this.addUser();
  }
  stop() {
    this.db.close();
  }

  CreateUsers() {
    let query = `CREATE TABLE IF NOT EXISTS Users (
        id                      integer primary key autoincrement,
        login                   text,
        password                text,
        email                   text

    )`;
    this.db.exec(query);
  }

  addUser = (login, passw, email) => {
    let query = `INSERT INTO Users (login, passw, email) VALUES (?,?,?)`;
    try {
      this.db.run(query, login, passw, email);
      console.log(`Zapis ${login}, ${passw}, ${email}`);
    } catch (err) {
      console.log(`Error ${err}`);
    }
    return 1; // user id
  };

  getUser = (id) => {
    let query = `SELECT * FROM Users WHERE id=?`;
    try {
      return this.db.all(query, id);
    } catch (err) {
      console.error(`Ошибка ${err}`);
    }
  };

  loginUser = (login, passwd) => {
    return 1; // user_id
  };
}
