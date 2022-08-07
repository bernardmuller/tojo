import { ErrorRequestHandler } from 'express';

export class NotFoundError extends Error {
  constructor(message?: string) {
    super();
    this.message = message || 'Not Found.';
  }
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  }
  switch (err) {
    case err instanceof NotFoundError:
      res.status(404).json({ error: { message: err.message } });
    default:
      res.status(500).json({ error: { message: err.message } });
  }
};
