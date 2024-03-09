import express, { Request, Response } from "express";
import { createServer as createHttpServer } from "http";

const port = process.env["SERVER_PORT"];

const app = express();
const httpServer = createHttpServer(app);

export { app, httpServer, port };
