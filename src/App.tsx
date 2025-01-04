import { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

import './App.css';
import { Todo } from './components/Todo.model';

const initialTodos = [{ id: 't1', text: 'Finish the course' }];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => {
        return prevTodo.id !== id;
      });
    });
  };

  return (
    <>
      <NewTodo onAddTodo={addTodo} />
      <TodoList removeTodo={removeTodo} items={todos} />
    </>
  );
}

export default App;
