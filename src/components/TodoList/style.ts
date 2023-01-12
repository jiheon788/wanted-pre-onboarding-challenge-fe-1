import styled, { css } from "styled-components";

export const TodosUl = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  width: 100%;
  overflow-y: auto;

  /* 스크롤바의 너비 */
  &::-webkit-scrollbar {
    width: 7px;
  }

  /* 스크롤바의 색상 */
  &::-webkit-scrollbar-thumb {
    background: #d72880;
    border-radius: 16px;
  }

  /* 스크롤바 뒷 배경 색상 */
  &::-webkit-scrollbar-track {
    background: rgba(215, 40, 128, 0.08);
    border-radius: 16px;
  }
`

export const TodoLi = styled.li`
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const TimeStamp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 4px;
  font-size: 8px;
  background-color: #999;
  color: white;
  border-radius: 5px;
`
