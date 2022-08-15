const express = require("express");
const path = require("path");
const compression = require("compression");
require("express-async-errors");
const errorHandler = require("./server/middleware/error-handler");
const router = require("./server/routes/api");
const logger = require("./server/middleware/logger");
const port = process.env.PORT || "8080";
const server = express();

require("dotenv").config();

server.use([logger, compression(), express.json()]);

server.use("/", router);

server.use(errorHandler);
server.use(express.static(path.join(__dirname, "/server/public")));
server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./server/public/index.html"));
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection", reason.message);
  throw reason;
});

process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception", error.message);
  process.exit(1);
});

server.listen(port, () => {
  console.log("Server started on port", port);
});
