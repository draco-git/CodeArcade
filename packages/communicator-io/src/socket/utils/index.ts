import { createSocketServer } from "../server";

const getClientsCount = (io: ReturnType<typeof createSocketServer>) =>
  io.engine.clientsCount;

export { getClientsCount };
