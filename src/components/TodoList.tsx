import { calcTime } from "../lib/utils";
import { ITodo } from "pages/HomePage";

interface ITodoListProps {
  todos: ITodo[];
  setIndex: (index: number) => void;
}

const TodoList = ({ todos, setIndex }: ITodoListProps) => {
  return (
    <ul className="todos-section">
      {todos.map((todo: ITodo, index: number) => (
        <li
          key={todo.id}
          onClick={() => {
            setIndex(index);
          }}
        >
          <div className="check-label">
            <input type="checkbox" id="test-1" />
            <label htmlFor="">{todo.title}</label>
          </div>
          <div className="time-stamp">{calcTime(todo.updatedAt)}</div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
