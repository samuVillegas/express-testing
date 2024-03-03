export class HttpException extends Error {
  constructor(
    private readonly response: string,
    private readonly status: number
  ) {
    super();
  }

  getStatus(): number {
    return this.status;
  }

  getResponse(): string {
    return this.response;
  }
}
