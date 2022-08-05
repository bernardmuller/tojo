// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
import test from 'ava';
import { createTodo, deleteTodo, getTodos } from './actions';

test('getTodos gets todos', async (t) => {
  const todos = await getTodos();
  t.truthy(todos);
  t.is(todos.length, 10);
  t.truthy(todos[0].id);
});

test('getTodo gets 1 todo', async (t) => {
  const todos = await getTodos();
  t.truthy(todos);
  t.is(todos.length, 10);
  t.truthy(todos[0].id);
});

test('createTodo creates todos', async (t) => {
  const todo = await createTodo({ title: 'Write tests' });
  t.truthy(todo);
  t.truthy(todo.id);
  t.is(todo.title, 'Write tests');
  t.is(todo.completed, false);
});

test('deleteTodo deletes todos', async (t) => {
  const todo = await createTodo({ title: 'Write tests' });
  t.truthy(todo);
  t.truthy(todo.id);
  t.is(todo.title, 'Write tests');
  t.is(todo.completed, false);

  const deletedTodo = await deleteTodo(todo.id);
  t.falsy(deletedTodo.id);
});
