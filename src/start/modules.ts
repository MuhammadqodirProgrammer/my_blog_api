import express, { Application } from "express";
import cors from "cors"
import routes from "../router/index"

const modules = async (app: Application) => {
  app.use(cors(
    // { origin: ['http://localhost:3000'] }
  ))
  app.use(express.json());
  app.use("/api", routes);
};
export default modules;
