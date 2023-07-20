// экспорт константы Для соединения с сервером
export const baseUrl = "http://localhost:5000/api";
// экспорт функции для работы с сервером
export const postRequest = async (url, body) => {
  // функция формирования запроса с сервером
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  // переменная для хранения результата отправки запроса если ошибка,то сообщение об ошибке
  const data = await response.json();
  if (!response.ok) {
    let message;

    if (data?.message) {
      console.log(data?.message);
      message = data.message;
    } else {
      message = data;
      console.log(message);
    }

    return { error: true, message };
  }

  return data;
};
