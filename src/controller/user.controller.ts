import { Router, Response, Request, NextFunction } from "express";
import {
  CreateUserRequestBodyDto,
  DeleteUserRequestParamDto,
  UpdateUserRequestBodyDto,
  UpdateUserRequestParamDto,
} from "../dto/user.dto";
import UserService from "../service/user.service";
import UserRepository from "../repository/user.repository";

const userRouter = Router();
// const userRepository = new UserRepository();
const userService = new UserService();

userRouter.post(
  "/",
  (
    req: Request<null, null, CreateUserRequestBodyDto, null>,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const response = userService.create(req.body);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  }
);

userRouter.patch(
  "/:id",
  (
    req: Request<
      UpdateUserRequestParamDto,
      null,
      UpdateUserRequestBodyDto,
      null
    >,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const response = userService.update(+req.params.id, req.body);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  }
);

userRouter.get(
  "/",
  (_req: Request, res: Response, next: NextFunction): void => {
    try {
      const response = userService.list();
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  }
);

userRouter.delete(
  "/:id",
  (
    req: Request<DeleteUserRequestParamDto, null, null, null>,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const response = userService.delete(+req.params.id);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  }
);

export default userRouter;
