// This file is used to catch all errors and exeptions anywhere in the app and send the correct error message and status code back to the user.

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
