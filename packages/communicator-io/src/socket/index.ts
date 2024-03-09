import { httpServer } from "../server";
import { createSocketServer } from "./socket";

const io = createSocketServer(httpServer, {});

io.listen(8080);

io.on("connection", (socket) => {
  console.log(`Socket is connected : ID -> ${socket.id}`);

  socket.on("disconnect", (reason) => {
    console.log(`${socket.id} is disconnected`, "reason", reason);
  });

  socket.on("sendMessage", (msg) => {
    console.log("message from", socket.id, "to", msg);
    io.emit("receiveMessage", { msg, socketId: socket.id });
  });

  socket.emit("foo", "j");
});
