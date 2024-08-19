import { Todo } from './app';
import { TodoItem } from './todo-item';

export function TodoList(props) {
  return (
    <ul className="list">
      {props.todos.length === 0 && 'No Todos'}
      {props.todos.map((todo: Todo) => {
        return <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo} />;
      })}
    </ul>
  );
}
