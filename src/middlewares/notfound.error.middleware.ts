import { HttpException } from "../exception/http.exception";

export default class NotFoundError extends HttpException {
  constructor(message: string) {
    super(message, 404);
  }
}
