import React from "react";

const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center px-4 py-2 border-1 rounded-sm ${
        todo.completed ? "line-through text-gray-400" : ""
      }`}
    >
      <span onClick={() => onToggle(todo.id)} className="cursor-pointer">
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="text-black">
        ❌
      </button>
    </li>
  );
});

export default TodoItem;
