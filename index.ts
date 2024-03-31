import express, { Request, Response } from "express";
import "dotenv/config"
const app = express();
app.use(express.json());

// get post routes
app.get("/post", (req: Request, res: Response) => {
  res.status(200).json({ message: "post routes" });
});

// root routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});
// root routes
app.get("/user", (req: Request, res: Response) => {
  res.status(200).json({ message: "Get all users" });
});
export default app;
