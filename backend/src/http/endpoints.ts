import axios from 'axios';
import { Router, Request, Response } from 'express';
import TodoEndpoints from '../recources/todos/endpoints';

export const router = Router();

export type Endpoint = {
  method: 'get' | 'post' | 'put' | 'delete';
  path: string;
  handler: (req: Request, res: Response) => any;
};

const endpoints = [...TodoEndpoints];

// this function is used to generate routes for the endpoints that are setupp in each resources endpoint file.

export const createEndpoint = (router: Router, endpoint: Endpoint) => {
  router[endpoint.method](endpoint.path, endpoint.handler);
};

export const endpoint = (endpoint: Endpoint) => endpoint;
endpoints.forEach((endpoint) => createEndpoint(router, endpoint));
