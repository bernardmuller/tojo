import axios from 'axios';
import { NotFoundError } from '../../http/errors';

export const createTodo = (data: { title: string }) => {
  const newTodo = axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      ...data,
      completed: false,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return newTodo;
};

export const getTodos = async (params?: { filters?: { id?: string } }) => {
  if (params?.filters?.id) {
    const todo = axios
      .get(`https://jsonplaceholder.typicode.com/todos/${params.filters.id}`)
      .then((response) => {
        const todo = response.data;
        return todo;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
    if (!todo) throw new NotFoundError();
    return todo;
  }

  const todos = await axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      const todos = response.data.slice(0, 10);
      return todos;
    })
    .catch((error) => {
      console.log(error);
      return;
    });
  return todos;
};

// convert data from any to type
export const updateTodo = ({ id, data }: { id: string; data: any }) => {
  const updatedTodo = axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      const todos = response.data;
      return todos;
    })
    .catch((error) => {
      console.log(error);
    });
  return updatedTodo;
};

export const deleteTodo = (id: string) => {
  const deletedTodo = axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      const todo = response.data;
      return todo;
    })
    .catch((error) => {
      console.log(error);
    });
  return deletedTodo;
};
