const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(99).json({ message: "API is up!!!" });
});

module.exports = server;
