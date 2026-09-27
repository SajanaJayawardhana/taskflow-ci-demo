export function addTask(tasks, text) {
  const title = String(text).trim();
  if (!title) throw new Error('Task cannot be empty');
  return [...tasks, { id: crypto.randomUUID(), title, done: false }];
}

export function toggleTask(tasks, id) {
  return tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
}

export function removeTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

export function remaining(tasks) {
  return tasks.filter(task => !task.done).length;
}
