const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Массив
const connections = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("user connected");

  connections.push(socket.id);

  io.emit("connections", connections);

  socket.on("disconnect", () => {
    console.log("user disconnected");

    // Удаляем id подключения из массива
    const index = connections.indexOf(socket.id);
    if (index > -1) {
      connections.splice(index, 1);
    }

    // Отправляем обновленный массив id подключений клиенту
    io.emit("connections", connections);
  });

  socket.on("privateMessage", (data) => {
    io.to(data.target).emit("privateMessage", data.message);
  });
});

http.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
