const fs = require('fs');

// Функция для чтения JSON файла
function readJSONFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
}

// Функция для записи JSON файла
function writeJSONFile(filename, jsonData) {
  return new Promise((resolve, reject) => {
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(filename, jsonString, 'utf8', (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

async function updateAndWriteJSONFile() {
  const filename = './data.json';

  try {
    // Чтение JSON файла
    const jsonData = await readJSONFile(filename);
    console.log('Текущее значение count:', jsonData.count);

    // Увеличение значения count на один
    jsonData.count++;

    // Запись обновленного JSON файла
    await writeJSONFile(filename, jsonData);
    console.log('Значение count успешно обновлено и записано в файл.');

  } catch (error) {
    console.log('Произошла ошибка:', error);
  }
}

updateAndWriteJSONFile();