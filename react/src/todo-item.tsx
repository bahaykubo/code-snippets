export function TodoItem(props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={(e) => props.toggleTodo(props.todo.id, e.target.checked)}
        />
        {props.todo.title}
      </label>
      <button className="btn btn-danger" onClick={() => props.deleteTodo(props.todo.id)}>
        Danger
      </button>
    </li>
  );
}
