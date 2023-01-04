import { apiClient } from ".";

/**
 * 회원가입
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const postSignUpData = async (email, password) => {
  return await apiClient({
    method: "post",
    url: `/users/create`,
    params: {
      email,
      password
    }
  })
};

/**
 * 로그인
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const postSignInData = async (email, password) => {
  return await apiClient({
    method: "post",
    url: `/users/login`,
    params: {
      email,
      password
    }
  })
}; 