import {
  // ChangeEvent,
  FormEvent,
  // useState,
  FC,
  useRef,
} from 'react';

import { Todo } from './Todo.model';

interface NewTodoProps {
  onAddTodo: (todo: Todo) => void;
}

const NewTodo: FC<NewTodoProps> = ({ onAddTodo }) => {
  // const [todoText, setTodoText] = useState('');

  const textInputRef = useRef<HTMLInputElement>(null);

  const handleTodoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo({ text: enteredText, id: enteredText });
    // setTodoText('');
  };

  // const handleTodoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTodoText(event.target.value);
  // };

  return (
    <form onSubmit={handleTodoSubmit}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input
          ref={textInputRef}
          id="todo-text"
          // value={todoText}
          type="text"
          // onChange={handleTodoTextChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
