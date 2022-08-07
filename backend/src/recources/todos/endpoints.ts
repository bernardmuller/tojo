import { Request, Response } from 'express';
import { Endpoint } from 'http/endpoints';
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from './actions';

// This is a list of endpoint "blueprints" that will be passed to the endpoint creator
// function to create all the CRUD endpoint the client will use to perform actions on the frontend.

const endpoints: Endpoint[] = [
  {
    method: 'post',
    path: '/todos',
    handler: (req, res) => {
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
    handler: async (req, res) => {
      const todos = await getTodos();
      res.status(200).send(todos);
    },
  },
  {
    method: 'get',
    path: '/todos/:id',
    handler: async (req, res) => {
      const { id } = req.params;
      const todo = await getTodo(id);
      res.status(200).send(todo);
    },
  },
  {
    method: 'put',
    path: '/todos/:id',
    handler: async (req, res) => {
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
    handler: async (req, res) => {
      const { id } = req.params;
      const todos = await deleteTodo(id);
      res.status(200).send(todos);
    },
  },
];

export default endpoints;
