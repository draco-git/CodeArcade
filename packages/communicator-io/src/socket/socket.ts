import { Server, ServerOptions as ServerIoOptions } from "socket.io";
import { createServer as createHttpServer } from "http";

export interface ServerOptions extends Partial<ServerIoOptions> {}

const createSocketServer = (
  httpServerOrPort: ReturnType<typeof createHttpServer> | number,
  options: ServerOptions,
) =>
  new Server(httpServerOrPort, {
    cors: {
      origin: ["http://localhost:3000"],
    },
    ...options,
  });

export { createSocketServer };
