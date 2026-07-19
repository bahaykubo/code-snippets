import { Todo } from '../types/todo';
import { TodoItem } from './todo-item';
import styles from './todo-list.module.css';

interface Props {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function TodoList({ todos, toggleTodo, deleteTodo }: Props) {
  return (
    <ul className={styles.list}>
      {todos.length === 0 && <li className={styles.empty}>No Todos</li>}
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />;
      })}
    </ul>
  );
}
