import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

socket.on("connect", () => {
  console.log("socket id", socket.id);
});

const createClientSocket = (uri: string) => io(uri);
