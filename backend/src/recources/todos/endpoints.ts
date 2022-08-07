import { Request, Response } from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from './actions';

const endpoints = [
  {
    method: 'post',
    path: '/todos',
    handler: (req: Request, res: Response) => {
      const newTodo = {
        title: req.body.title,
      };
      const todo = createTodo(newTodo);
      res.status(200).send(todo);
    },
  },
  {
    method: 'get',
    path: '/todos',
    handler: async (req: Request, res: Response) => {
      const todos = await getTodos();
      res.status(200).send(todos);
    },
  },
  {
    method: 'get',
    path: '/todos/:id',
    handler: async (req: Request, res: Response) => {
      const { id } = req.params;
      const todo = await getTodos({ filters: { id } });
      return res.status(200).send(todo);
    },
  },
  {
    method: 'put',
    path: '/todos/:id',
    handler: async (req: Request, res: Response) => {
      const { id } = req.params;
      const updateData = {
        title: req.body?.title,
        completed: req.body?.completed,
      };
      const todos = await updateTodo(id, updateData);
      res.status(200).send(todos);
    },
  },
  {
    method: 'delete',
    path: '/todos/:id',
    handler: async (req: Request, res: Response) => {
      const { id } = req.params;
      const todos = await deleteTodo(id);
      res.status(200).send(todos);
    },
  },
];

export default endpoints;
