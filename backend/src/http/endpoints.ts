import axios from 'axios';
import { Router, Request, Response } from 'express';
import TodoEndpoints from '../recources/todos/endpoints';

export const router = Router();

type Endpoint = {
  method: 'get' | 'post' | 'put' | 'delete';
  path: string;
  handler: (req: Request, res: Response) => any;
};

const endpoints = [...TodoEndpoints];

export const createEndpoint = (router: Router, endpoint: Endpoint) => {
  router[endpoint.method](endpoint.path, endpoint.handler);
};

export const endpoint = (endpoint: any) => endpoint;
endpoints.forEach((endpoint) => createEndpoint(router, endpoint));
