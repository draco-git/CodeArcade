import { io } from "socket.io-client";
import { v4 as uuidv4, v5 } from "uuid";

const socket = io("http://localhost:8080");

socket.on("connect", () => {
  console.log("socket id", socket.id, v5("hello", "madjav"));
});

socket.emit("sendMessage", "Hi I am so & so", socket.id);

socket.on("receiveMessage", (msg, id) => {
  console.log("recieved message", msg, "from", id, v5("hello", "madjav"));
});

const createClientSocket = (uri: string) => io(uri);
