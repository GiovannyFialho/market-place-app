import fastifyMultipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";
import "dotenv/config";
import fastify from "fastify";
import * as Database from "./infra/database/";
import * as Cors from "./infra/web/config/cors";
import * as ErrorHandler from "./infra/web/config/error-handler";
import * as Schema from "./infra/web/config/schema";
import * as Swagger from "./infra/web/config/swagger";
import * as Routes from "./infra/web/routes";
import path = require("path");

(async () => {
  const app = fastify();

  ErrorHandler.configure(app);

  Schema.configure(app);

  await Swagger.configure(app);

  await Cors.register(app);

  await app.register(fastifyMultipart, {
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
  });

  await Database.connect();

  Routes.register(app);

  app.register(fastifyStatic, {
    root: path.join(process.cwd(), "src/assets"),
    prefix: "/assets/",
  });

  app.listen(
    {
      port: 3001,
      host: "0.0.0.0", // 🔑 permite conexões externas (mesma rede)
    },
    () => {
      console.log("Api rodando na porta 3001");
    }
  );
})();
