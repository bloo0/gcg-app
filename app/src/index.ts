import Hapi from "@hapi/hapi";
import { registerRoutes } from "./routes";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "0.0.0.0",
    debug: {
      request: ["error"],
    },
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return { status: 'ok' };
    }
  });

  registerRoutes(server);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
