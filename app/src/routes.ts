import { Server } from "@hapi/hapi";
import { generateCard } from "./controllers/generateCard";
import Joi from "joi";

export const registerRoutes = (server: Server) => {
  server.route({
    method: "POST",
    path: "/generate-card",
    handler: generateCard,
    options: {
      payload: {
        output: "data",
      },
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          message: Joi.string().required(),
        }),
      },
    },
  });
};
