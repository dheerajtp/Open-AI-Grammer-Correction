import express from "express";
const routes = require("./routes/index");

export default (app) => {
  app.use(express.json());
  app.use("/api/v1/correct", routes.correctionRoute);
};