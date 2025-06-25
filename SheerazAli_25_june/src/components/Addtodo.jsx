import "./style/AddTodo.css";
import { useState } from "react";

const AddTodo = ( {Trigger} ) => {
  const [todo, setTodo] = useState("");

  const HandleTodo = () => {
    if (!todo) {
      alert("Input Cannot be Empty");
      return;
    }
    let Todo = { name: todo, id: Date.now() };

    if (!localStorage.getItem("MyTodos")) {
      localStorage.setItem("MyTodos", JSON.stringify([Todo]));
      return;
    }
    let list = JSON.parse(localStorage.getItem("MyTodos"));
    let UpdList = [...list, Todo];
    localStorage.setItem("MyTodos", JSON.stringify(UpdList));

    Trigger()

  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="todo-input"
        placeholder="Enter new todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="add-button" onClick={HandleTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
