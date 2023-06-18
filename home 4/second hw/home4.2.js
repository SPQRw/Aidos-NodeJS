const fs = require("fs");

// Считываем содержимое файла
fs.readFile("data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    // Разбираем JSON-строку в объект
    const data = JSON.parse(jsonString);

    // Выводим значение count в консоль
    console.log(data.count);

    // Увеличиваем значение count на 1
    data.count++;

    // Перезаписываем файл
    fs.writeFile("data.json", JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Файл успешно перезаписан!");
    });
  } catch (err) {
    console.error("Ошибка:", err);
  }
});
