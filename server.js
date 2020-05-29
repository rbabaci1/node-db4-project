const express = require("express");
const helmet = require("helmet");

const recipesRouter = require("./api/recipesRouter");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is up!!!" });
});

const errorHandler = (error, req, res, next) => {
  const code = error.status || error.statusCode || 500;

  res.status(code).json(error);
};

server.use(errorHandler);

module.exports = server;
