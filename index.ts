import express, { Application, Request, Response } from "express";
import "dotenv/config"
const app: Application = express();

import modules from "./src/start/modules"
import run from "./src/start/run"

modules(app);
// get post routes
app.get("/post", (req: Request, res: Response) => {
  res.status(200).json({ message: "post routes" });
});

// root routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});
// root routes
app.get("/users", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get all users" });
});

run(app);
export default app;
