import { useEffect, useState } from 'react';
import { Todo } from '../types/todo';
import { TodoList } from './todo-list';
import { TodoNewForm } from './todo-new-form';
import styles from './todo.module.css';

export function ToDo() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const todoItems = localStorage.getItem('TodoItems');
    return todoItems ? JSON.parse(todoItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('TodoItems', JSON.stringify(todos));
  });

  function addTodo(title: string) {
    setTodos((currentTodos: Todo[]) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos: Todo[]) => {
      return currentTodos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos: Todo[]) => {
      return currentTodos.filter((todo: Todo) => todo.id !== id);
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Todo List</h1>
      <TodoNewForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
