//jsのコメント

const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

// 追加・削除ボタンを作成
const addTasks = (task) => {
  // 入力したタスクを追加・表示
  const listItem = document.createElement('li');
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  // タスクに削除ボタンを付与
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  listItem.appendChild(deleteButton);

  // 削除ボタンをクリックで発動するようにする
  deleteButton.addEventListener('click', evt => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest('li');
  taskList.removeChild(chosenTask);
};

// 追加ボタンタスクの追加機能を付与
taskSubmit.addEventListener('click', evt => {
  evt.preventDefault();
  const task = taskValue.value;
  addTasks(task);
  taskValue.value = '';
});
