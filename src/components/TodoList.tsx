import { FC } from 'react';
import { Todo } from './Todo.model';

interface TodoListProps {
  items: Todo[];
  removeTodo: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({ items, removeTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li onClick={() => removeTodo(todo.id)} key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
