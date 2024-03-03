import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exception/http.exception";

export default (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof HttpException) {
    res.status(err.getStatus()).send({
      status: err.getStatus(),
      message: err.getResponse(),
    });
  } else {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
    });
  }
};
