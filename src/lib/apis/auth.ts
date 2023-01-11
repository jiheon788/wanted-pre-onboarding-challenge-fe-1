import { apiClient } from ".";

/**
 * 회원가입
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const postSignUpData = async (email: string, password: string) => {
  return await apiClient({
    method: "post",
    url: `/users/create`,
    data: {
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
export const postSignInData = async (email: string, password: string) => {
  return await apiClient({
    method: "post",
    url: `/users/login`,
    data: {
      email,
      password
    }
  })
}; 