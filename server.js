"use strict";

const server = require("./app")({
  logger: {
    level: "info",
    transport: {
      target: "pino-pretty",
      options: {
        levelFirst: true,
        translateTime: true,
        colorize: true,
      },
    },
  },
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
