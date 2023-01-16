import { getTodos } from 'lib/apis/todos';
import token from 'lib/token';
import { useQuery } from 'react-query';
import { ITodo } from 'types/todo.type';
import { calcTime } from '../../lib/utils';
import { TodosUl, TodoLi, TimeStamp } from './style';

interface ITodoListProps {
  setIndex: (index: number) => void;
}

const TodoList = ({ setIndex }: ITodoListProps) => {
  const { status, data, error }: any = useQuery({
    queryKey: ['getTodos'],
    queryFn: () =>
      getTodos(token.getToken('token')).then((response) =>
        response.data.data.reverse(),
      ),
  });

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

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
