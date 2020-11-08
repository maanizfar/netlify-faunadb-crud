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
