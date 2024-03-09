import bodyParser from "body-parser";
import cors from "cors";
import { Request, Response } from "express";
import { login } from "./src/apis/login";
import { signup } from "./src/apis/signup";
import { app, port } from "./src/server";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.send("hello world");
});

app.post("/login", login);
app.post("/signup", signup);

app.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});
