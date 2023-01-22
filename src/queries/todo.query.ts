import { queryKeys } from 'constants/queries.constant';
import { STORAGE_KEY } from 'constants/token.constant';
import { createTodo, deleteTodo, getTodos, updateTodo } from 'lib/apis/todos';
import token from 'lib/token';
import { useMutation, useQuery } from 'react-query';

export const useGetTodosQuery = () =>
  useQuery({
    queryKey: [queryKeys.TODOS_DATA],
    queryFn: () =>
      getTodos(token.getToken(STORAGE_KEY)).then((response) =>
        response.data.data.reverse(),
      ),
  });

export const useCreateTodosMutation = () => useMutation(createTodo);

export const useUpdateTodosMutation = () => useMutation(updateTodo);

export const useDeleteTodosMutation = () => useMutation(deleteTodo);
