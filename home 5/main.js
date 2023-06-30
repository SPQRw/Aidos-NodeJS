import TelegramBot from "node-telegram-bot-api";
const log = console.log;
const TOKEN = "5945064072:AAH6Dg3sJjpU5wKZbqjm3ca2Exkx8RZ96nI";
const bot = new TelegramBot(TOKEN, { polling: true });
let response;
bot.on("text", (msg) => {
  switch (msg.text.toLocaleLowerCase()) {
    case "hello":
      response = `hello Samurai, ${msg.from.first_name}!`;
      bot.sendMessage(msg.chat.id, response);
      break;
    case "/start":
      response = `Choose city to check temperature`;
      bot.sendMessage(msg.chat.id, response, {
        reply_markup: {
          inline_keyboard: [
            [{ text: "London", callback_data: "London" }],
            [{ text: "Almaty", callback_data: "Almaty" }],
            [{ text: "Berlin", callback_data: "Berlin" }],
            [{ text: "Tokyo", callback_data: "Tokyo" }],
            [{ text: "Rome", callback_data: "Rome" }],
            [{ text: "New-York", callback_data: "New-York" }],
          ],
        },
      });
      break;
  }
});

/* VN: Весь код обработчика "callback_query" состоит из повторяющихся частей, которые отличаются только одним 
значением в url. Все эти фрагменты кода можно свернуть в одну единственную функцию. Более того, вам даже не
нужно использовать конструкцию if-else: msg.data можно прям сразу встроить в url запроса.
*/
bot.on("callback_query", async (msg) => {
  if (msg.data == "London") {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=afbe66da0ca5458894d55219232606&q=London&days=1&aqi=no&alerts=no"
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        log(data);

        response = `City Name: <b>${data.location.name}</b> \n Time : ${data.location.localtime} \n Condition : ${data.current.condition.text} ${data.current.condition.icon} \n Temperature C: ${data.current.temp_c} \n Feels like: ${data.current.feelslike_c} \n Humidity: ${data.current.humidity} \n Wind kph: ${data.current.wind_kph} \n Wind dir: ${data.current.wind_dir}`;
        bot.sendMessage(msg.message.chat.id, response, {
          parse_mode: "HTML",
        });
      });
  } else if (msg.data == "Almaty") {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=afbe66da0ca5458894d55219232606&q=Almaty&days=1&aqi=no&alerts=no"
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        log(data);

        response = `City Name: <b>${data.location.name}</b> \n Time : ${data.location.localtime} \n Condition : ${data.current.condition.text} ${data.current.condition.icon} \n Temperature C: ${data.current.temp_c} \n Feels like: ${data.current.feelslike_c} \n Humidity: ${data.current.humidity} \n Wind kph: ${data.current.wind_kph} \n Wind dir: ${data.current.wind_dir}`;
        bot.sendMessage(msg.message.chat.id, response, {
          parse_mode: "HTML",
        });
      });
  } else if (msg.data == "Berlin") {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=afbe66da0ca5458894d55219232606&q=Berlin&days=1&aqi=no&alerts=no"
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        log(data);

        response = `City Name: <b>${data.location.name}</b> \n Time : ${data.location.localtime} \n Condition : ${data.current.condition.text} ${data.current.condition.icon} \n Temperature C: ${data.current.temp_c} \n Feels like: ${data.current.feelslike_c} \n Humidity: ${data.current.humidity} \n Wind kph: ${data.current.wind_kph} \n Wind dir: ${data.current.wind_dir}`;
        bot.sendMessage(msg.message.chat.id, response, {
          parse_mode: "HTML",
        });
      });
  } else if (msg.data == "Tokyo") {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=afbe66da0ca5458894d55219232606&q=Tokyo&days=1&aqi=no&alerts=no"
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        log(data);

        response = `City Name: <b>${data.location.name}</b> \n Time : ${data.location.localtime} \n Condition : ${data.current.condition.text} ${data.current.condition.icon} \n Temperature C: ${data.current.temp_c} \n Feels like: ${data.current.feelslike_c} \n Humidity: ${data.current.humidity} \n Wind kph: ${data.current.wind_kph} \n Wind dir: ${data.current.wind_dir}`;
        bot.sendMessage(msg.message.chat.id, response, {
          parse_mode: "HTML",
        });
      });
  } else if (msg.data == "Rome") {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=afbe66da0ca5458894d55219232606&q=Rome&days=1&aqi=no&alerts=no"
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        log(data);

        response = `City Name: <b>${data.location.name}</b> \n Time : ${data.location.localtime} \n Condition : ${data.current.condition.text} ${data.current.condition.icon} \n Temperature C: ${data.current.temp_c} \n Feels like: ${data.current.feelslike_c} \n Humidity: ${data.current.humidity} \n Wind kph: ${data.current.wind_kph} \n Wind dir: ${data.current.wind_dir}`;
        bot.sendMessage(msg.message.chat.id, response, {
          parse_mode: "HTML",
        });
      });
  } else if (msg.data == "New-York") {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=afbe66da0ca5458894d55219232606&q=New-York&days=1&aqi=no&alerts=no"
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        log(data);

        response = `City Name: <b>${data.location.name}</b> \n Time : ${data.location.localtime} \n Condition : ${data.current.condition.text} ${data.current.condition.icon} \n Temperature C: ${data.current.temp_c} \n Feels like: ${data.current.feelslike_c} \n Humidity: ${data.current.humidity} \n Wind kph: ${data.current.wind_kph} \n Wind dir: ${data.current.wind_dir}`;
        bot.sendMessage(msg.message.chat.id, response, {
          parse_mode: "HTML",
        });
      });
  }
});
// bot.on("photo", (msg) => {
//   let file_id = msg.photo[msg.photo.length - 1].file_id;
//   bot.downloadFile(file_id, "./img");
// });

// bot.on("sticker", async (msg) => {
//   //   log(msg);
//   let sticker = await bot.downloadFile(msg.file_id, ".");
//   log(sticker);
// });
