import { apiClient } from '.';
import { createTodoParam, getTodoParam, updateTodoParam } from './todos.param';

export const getTodos = async (accessToken: any) => {
  return await apiClient({
    method: 'get',
    url: `/todos`,
    headers: {
      Authorization: accessToken,
    },
  });
};

export const getTodoById = async ({ accessToken, id }: getTodoParam) => {
  return await apiClient({
    method: 'get',
    url: `/todos/${id}`,
    headers: {
      Authorization: accessToken,
    },
  });
};

export const createTodo = async ({
  accessToken,
  title,
  content,
}: createTodoParam) => {
  return await apiClient({
    method: 'post',
    url: `/todos`,
    headers: {
      Authorization: accessToken,
    },
    data: {
      title,
      content,
    },
  });
};

export const updateTodo = async ({
  accessToken,
  title,
  content,
  id,
}: updateTodoParam) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${id}`,
    headers: {
      Authorization: accessToken,
    },
    data: {
      title,
      content,
    },
  });
};

export const deleteTodo = async ({ accessToken, id }: getTodoParam) => {
  return await apiClient({
    method: 'delete',
    url: `/todos/${id}`,
    headers: {
      Authorization: accessToken,
    },
  });
};
