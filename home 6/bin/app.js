import { Database } from "./model.js";
import { Telegram } from "./view.js";

export class Application {
    constructor(config) {
        this.config = config;
        this.model = new Database(config.database);
        this.view = new Telegram(config.telegram);
    }

    async start() {
        this.view.start();
        await this.model.start();
        await this.model.addUser("aidos", "123124", "532423");
        await this.model.addEvents("Концерт Beyonce", "Canada", "2023-06-25", "2");
    }

    async stop() {
        this.view.stop();
        this.model.stop();
    }
}