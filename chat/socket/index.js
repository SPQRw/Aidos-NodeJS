const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173/" });
let onlineUsers = [];
io.on("connection", (socket) => {
  console.log("Connected", socket.id);
  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
  });
});
io.listen(3000);
