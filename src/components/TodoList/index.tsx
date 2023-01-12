import { calcTime } from '../../lib/utils';
import { ITodo } from 'pages/HomePage';
import { TodosUl, TodoLi, TimeStamp } from './style';

interface ITodoListProps {
  todos: ITodo[];
  setIndex: (index: number) => void;
}

const TodoList = ({ todos, setIndex }: ITodoListProps) => {
  return (
    <TodosUl>
      {todos.map((todo: ITodo, index: number) => (
        <TodoLi
          key={todo.id}
          onClick={() => {
            setIndex(index);
          }}
        >
          {todo.title}
          <TimeStamp>{calcTime(todo.updatedAt)}</TimeStamp>
        </TodoLi>
      ))}
    </TodosUl>
  );
};

export default TodoList;
