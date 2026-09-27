import { addTask, toggleTask, removeTask, remaining } from './tasks.js';

const key = 'taskflow-tasks';
let tasks;
try {
  const saved = JSON.parse(localStorage.getItem(key) || '[]');
  tasks = Array.isArray(saved) ? saved : [];
} catch {
  tasks = [];
}
const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const count = document.querySelector('#count');

function render() {
  localStorage.setItem(key, JSON.stringify(tasks));
  list.replaceChildren();
  for (const task of tasks) {
    const row = document.createElement('li');
    if (task.done) row.classList.add('done');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.setAttribute('aria-label', 'Complete ' + task.title);
    checkbox.addEventListener('change', () => { tasks = toggleTask(tasks, task.id); render(); });
    const title = document.createElement('span');
    title.textContent = task.title;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Delete';
    remove.setAttribute('aria-label', 'Delete ' + task.title);
    remove.addEventListener('click', () => { tasks = removeTask(tasks, task.id); render(); });
    row.append(checkbox, title, remove);
    list.append(row);
  }
  count.textContent = remaining(tasks) + ' task(s) remaining';
}
form.addEventListener('submit', event => {
  event.preventDefault();
  tasks = addTask(tasks, input.value);
  input.value = '';
  render();
});
render();
