import express, { Application } from "express";

// import routes from "../api/routes/index";
import routes from "../router/index"

const modules = async (app: Application) => {
  app.use(express.json());
  app.use("/api", routes);
};
export default modules;
