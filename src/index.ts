import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import UserRouter from "./controller/user.controller";
import RequestErrorMiddleware from "./middlewares/request.error.middleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use("/users", UserRouter);

app.use(RequestErrorMiddleware);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
