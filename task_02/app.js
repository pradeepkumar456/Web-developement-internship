const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add Task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.classList.add('task-text');

  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✔️ Done';
  doneBtn.classList.add('done-btn');

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '&times;';
  deleteBtn.classList.add('delete-btn');

  // Mark as done
  doneBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete task
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(taskSpan);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
});
