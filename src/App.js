import { useEffect, useState } from "react";
import { readAllTodos } from "./utils/api";

import TodoCreator from "./components/todo-creator";

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
          <li key={todo.data.title}>{todo.data.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
