import "./style/TodoItem.css";

const TodoItem = (props) => {
  const onDelete = () => {
    let todoList = JSON.parse(localStorage.getItem("MyTodos"));
    let newlist = todoList.filter((item) => item.id !== props.Id);
    localStorage.setItem("MyTodos", JSON.stringify(newlist));

    props.Trigger();
  };

  const onEdit = () => {
    let NewTitle = prompt("Enter new title for the Todo");

    let TodoList = JSON.parse(localStorage.getItem("MyTodos")) || [];
    let UpdatedList = TodoList.map((item) =>
      item.id === props.Id ? { ...item, name: NewTitle } : item
    );

    localStorage.setItem("MyTodos", JSON.stringify(UpdatedList));
    props.Trigger();
  };

  return (
    <div className="todo-item">
      <p className="todo-text">{props.Title}</p>
      <div className="todo-actions">
        <button onClick={onEdit} className="edit-button">
          Edit
        </button>
        <button onClick={onDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
