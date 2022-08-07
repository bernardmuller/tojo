// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
import test from 'ava';
import { createTodo, deleteTodo, getTodo, getTodos } from './actions';

test('getTodos gets todos', async (t) => {
  const todos = await getTodos();
  t.truthy(todos);
  t.is(todos.length, 200);
  t.truthy(todos[0].id);
});

test('getTodo gets todo with id: 1', async (t) => {
  const id = '1';
  const todo = await getTodo(id);
  t.truthy(todo);
  t.is(String(todo.id), id);
});

test('getTodo gets todo errors on missing todo item', async (t) => {
  const id = '9999';
  const todoPromise = getTodo(id);
  await t.throwsAsync(todoPromise);
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

  // Would test that getTodo fails after deleting a particular todo item, but API does not persist deletes.
  // const todo = await getTodo(id); // throws error
});
