import { apiClient } from ".";

/**
 * 투두리스트 조회
 * @param {*} accessToken 
 * @returns 
 */
export const getTodos = async (accessToken) => {
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
export const getTodoById = async (accessToken, id) => {
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
export const createTodo = async (accessToken, title, content) => {
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
export const updateTodo = async (accessToken, title, content, id) => {
  return await apiClient({
    method: "put",
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
 * 투두리스트 삭제
 * @param {*} accessToken 
 * @param {*} id 
 * @returns 
 */
export const deleteTodo = async (accessToken, id) => {
  return await apiClient({
    method: "delete",
    url: `/todos/${id}`,
    headers: {
      Authorization: accessToken
    }
  })
};