import { Todo } from '../types/todo';
import styles from './todo-item.module.css';

interface Props {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function TodoItem({ todo, toggleTodo, deleteTodo }: Props) {
  return (
    <li className={styles.item}>
      <label className={`${styles.label} ${todo.completed ? styles.completed : ''}`}>
        <input type="checkbox" checked={todo.completed} onChange={(e) => toggleTodo(todo.id, e.target.checked)} />
        {todo.title}
      </label>
      <button className={styles['delete-btn']} onClick={() => deleteTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}
