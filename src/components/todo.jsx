import { useState } from "react";
import { deleteTodo, updateTodo } from "../utils/api";

const Todo = ({ title, id, onChange }) => {
  const [value, setValue] = useState(title);

  function onDeleteHandler() {
    deleteTodo(id).then(() => onChange());
  }

  function onUpdateHandler() {
    updateTodo(id, {
      title: value,
    }).then(() => onChange());
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => onUpdateHandler()}>Update</button>
      <button onClick={() => onDeleteHandler()}>Delete</button>
    </div>
  );
};

export default Todo;
