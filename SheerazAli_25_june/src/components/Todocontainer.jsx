import TodoItem from "./Todoitem";
import AddTodo from "./AddTodo";
import "./style/Todocontainer.css";
import { useEffect, useState } from "react";

const TodoContainer = () => {
  const [Todos, setTodos] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("MyTodos")) || [];
    setTodos(stored);
  }, [reload]);

  return (
    <div className="todo-container">
      <AddTodo
        Trigger={() => {
          setReload((prev) => !prev);
        }}
      />

      {Todos?.length > 0 ? (
        Todos.map((todo) => (
          <TodoItem
            key={todo.id}
            Trigger={() => setReload((prev) => !prev)}
            Title={todo.name}
            Id={todo.id}
          />
        ))
      ) : (
        <p>No avaliable Todos's</p>
      )}
    </div>
  );
};

export default TodoContainer;

// <TodoItem />
