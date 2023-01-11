import { apiClient } from ".";

/**
 * 투두리스트 조회
 * @param {*} accessToken 
 * @returns 
 */
export const getTodos = async (accessToken: any) => {
  return await apiClient({
    method: "get",
    url: `/todos`,
    headers: {
      Authorization: accessToken
    }
  })
};

/**
 * 상세조회
 * @param {*} accessToken 
 * @param {*} id 
 * @returns 
 */
export const getTodoById = async (accessToken: any, id: string) => {
  return await apiClient({
    method: "get",
    url: `/todos/${id}`,
    headers: {
      Authorization: accessToken
    }
  })
};

/**
 * 투두리스트 작성
 * @param {*} accessToken 
 * @param {*} title 
 * @param {*} content 
 * @returns 
 */
export const createTodo = async (accessToken: any, title: string, content: string) => {
  return await apiClient({
    method: "post",
    url: `/todos`,
    headers: {
      Authorization: accessToken
    },
    data: {
      title,
      content
    }
  })
};

/**
 * 투두리스트 수정
 * @param {*} accessToken 
 * @param {*} title 
 * @param {*} content 
 * @param {*} id 
 * @returns 
 */
export const updateTodo = async (accessToken: any, title: string, content: string, id: string) => {
  return await apiClient({
    method: "put",
    url: `/todos/${id}`,
    headers: {
      Authorization: accessToken
    },
    data: {
      title,
      content
    }
  })
};

/**
 * 투두리스트 삭제
 * @param {*} accessToken 
 * @param {*} id 
 * @returns 
 */
export const deleteTodo = async (accessToken: any, id: string) => {
  return await apiClient({
    method: "delete",
    url: `/todos/${id}`,
    headers: {
      Authorization: accessToken
    }
  })
};