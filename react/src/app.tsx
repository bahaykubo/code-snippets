import { useEffect, useState } from 'react';
import { NewTodoForm } from './new-todo-form';
import { TodoList } from './todo-list';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState(() => {
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
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
