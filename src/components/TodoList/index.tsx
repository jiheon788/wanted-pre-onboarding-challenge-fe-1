import { ITodo } from 'types/todo.type';
import { calcTime } from '../../lib/utils';
import { TodosUl, TodoLi, TimeStamp } from './style';

interface ITodoListProps {
  data: ITodo[];
  setIndex: (index: number) => void;
}

const TodoList = ({ data, setIndex }: ITodoListProps) => {
  return (
    <TodosUl>
      {data.map((todo: ITodo, index: number) => (
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
