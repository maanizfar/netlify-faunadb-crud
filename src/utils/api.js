export const createTodo = (todoInfo) => {
  return fetch("/.netlify/functions/todos-create", {
    body: JSON.stringify(todoInfo),
    method: "POST",
  }).then((res) => {
    return res.json();
  });
};

export const readAllTodos = () => {
  return fetch("/.netlify/functions/todos-read-all").then((res) => res.json());
};

export const deleteTodo = (todoId) => {
  return fetch(`/.netlify/functions/todos-delete`, {
    body: JSON.stringify({ id: todoId }),
    method: "POST",
  }).then((res) => res.json());
};

export const updateTodo = (todoId, todoInfo) => {
  console.log("API: ", todoId, todoInfo);
  return fetch(`/.netlify/functions/todos-update`, {
    body: JSON.stringify({
      id: todoId,
      todoInfo,
    }),
    method: "POST",
  }).then((res) => res.json());
};
