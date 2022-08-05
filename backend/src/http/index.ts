import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { router } from './endpoints';
import { errorHandler } from './errors';

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
