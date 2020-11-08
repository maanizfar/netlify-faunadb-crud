import { useEffect, useState } from "react";
import { readAllTodos } from "./utils/api";

import TodoCreator from "./components/todo-creator";
import Todo from "./components/todo";

function App() {
  const [todos, setTodos] = useState([]);

  function refreshTodos() {
    readAllTodos().then((res) => setTodos(res));
  }

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <div>
      <h1>Netlify Faunadb CRUD</h1>

      <TodoCreator onCreate={refreshTodos} />

      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.ref["@ref"].id}
            title={todo.data.title}
            id={todo.ref["@ref"].id}
            onChange={refreshTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
