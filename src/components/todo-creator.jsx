import { useState } from "react";
import { createTodo } from "../utils/api";

const TodoCreator = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  function onChangeHandler(value) {
    setTitle(value);
  }

  function onClickHandler() {
    createTodo({ title: title }).then((res) => {
      setTitle("");
      onCreate();
    });
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <button onClick={() => onClickHandler()}>Create</button>
    </div>
  );
};

export default TodoCreator;
