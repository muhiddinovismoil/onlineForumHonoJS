import { Hono } from "hono";
import { boot } from "./src/config/index.js";
import { serve } from "@hono/node-server";
import { authRouter } from "./src/routes/index.js";
const app = new Hono();
app.route("/api/v1", authRouter);
console.log(`Server is running on port: ${boot.port}`);
serve({ fetch: app.fetch, port: boot.port });
