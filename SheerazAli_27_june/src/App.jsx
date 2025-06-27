import { useReducer, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import TodoItem from "./components/TodoItems";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "ADD", payload: text });
      setText("");
    }
  };

  const handleToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", payload: id });
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch({ type: "DELETE", payload: id });
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto mt-10 p-4">
        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a todo"
            className="w-full px-4 py-2 border rounded"
          />
          <button
            onClick={handleAdd}
            className="bg-black text-white px-4 rounded"
          >
            Add
          </button>
        </div>
        <ul className="bg-white flex flex-col gap-5 shadow rounded">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
