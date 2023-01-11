import { calcTime } from "../lib/utils";

interface ITodoListProps {
  todos: any;
  setIndex: any;
}

interface ITodo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
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
