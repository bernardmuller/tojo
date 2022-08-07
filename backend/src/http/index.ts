import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { router } from './endpoints';
import { errorHandler } from './errors';

// this function is used to set up the express app with most needed services to parse the request body that is sent to the server and deal with Cross Site Request Forgery.

export const createApp = () => {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      credentials: true,
      origin: '*',
    }),
  );

  app.use(express.json());
  app.use('/', router);

  app.use(errorHandler);

  return app;
};
