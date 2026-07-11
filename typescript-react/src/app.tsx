import { useEffect, useState } from 'react';
import { TodoNewForm } from './todo/todo-new-form';
import { TodoList } from './todo/todo-list';
import { Select, SelectOption } from './select-items/select';
import { Todo } from './types/todo';

const selectOptions: SelectOption[] = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const todoItems = localStorage.getItem('TodoItems');
    return todoItems ? JSON.parse(todoItems) : [];
  });
  const [selected, setSelected] = useState<SelectOption | undefined>(selectOptions[0]);

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
      <TodoNewForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <h1 className="header">Select</h1>
      <Select options={selectOptions} value={selected} onChange={setSelected} />
    </>
  );
}
