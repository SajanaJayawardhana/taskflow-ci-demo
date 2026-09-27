import test from 'node:test';
import assert from 'node:assert/strict';
import { addTask, toggleTask, removeTask, remaining } from '../src/tasks.js';

test('adds a trimmed task', () => {
  const tasks = addTask([], '  Study Linux  ');
  assert.equal(tasks[0].title, 'Study Linux');
  assert.equal(remaining(tasks), 1);
});
test('rejects empty tasks', () => assert.throws(() => addTask([], '   ')));
test('completes and deletes a task', () => {
  const [task] = addTask([], 'Practice');
  const completed = toggleTask([task], task.id);
  assert.equal(completed[0].done, true);
  assert.equal(remaining(completed), 0);
  assert.deepEqual(removeTask(completed, task.id), []);
});
