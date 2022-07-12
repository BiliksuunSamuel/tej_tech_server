import express from "express";
import http from "http";
import cors from "cors";
import configuration from "./src/configuration";
import { AuthRouter, CategoryRouter, StoreRouter } from "./src/router";
import "./src/configuration/cloudinary_configuration";
import "./src/connection";

const app = express();
const server = http.createServer(app);

//
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
//
app.use(AuthRouter);
app.use(StoreRouter);
app.use(CategoryRouter);
//
server.listen(configuration.port, () => {
  console.log(`server running at http://localhost:${configuration.port}`);
});
