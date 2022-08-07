import axios from 'axios';
import { NotFoundError } from '../../http/errors';

export const createTodo = async (data: { title: string }) => {
  const newTodo = await axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      ...data,
      completed: false,
    })
    .then((response) => {
      return response.data;
    });
  return newTodo;
};

export const getTodo = async (id: string) => {
  const todo = await axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      const todo = response.data;
      return todo;
    });
  if (!todo) throw new NotFoundError();

  return todo;
};

export const getTodos = async () => {
  const todos = await axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      const todos = response.data;
      return todos;
    });
  return todos;
};

export const updateTodo = (
  id: string,
  data: { title?: string; completed?: boolean },
) => {
  const updatedTodo = axios
    .put(`https://jsonplaceholder.typicode.com/todos/${id}`, data)
    .then((response) => {
      const todos = response.data;
      return todos;
    });
  return updatedTodo;
};

export const deleteTodo = (id: string) => {
  const deletedTodo = axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      const todo = response.data;
      return todo;
    });
  return deletedTodo;
};
