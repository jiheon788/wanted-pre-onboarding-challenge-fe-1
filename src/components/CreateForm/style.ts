import styled, { css } from "styled-components";

export const CreateContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const CreateInput = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.01);
  padding: 14px 10px;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(5.5px);
  color: #232323;
  border-radius: 7px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 30px rgba(35, 35, 35, 0.1);
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;

  &:focus {
    outline: 3px solid rgba(215, 40, 128, 0.4);
  }

  &:disabled {
    background-color: transparent;
  }
`;

export const CreateTextArea = styled.textarea`
  border: 1px solid rgba(255, 255, 255, 0.01);
  padding: 14px 10px;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(5.5px);
  color: #232323;
  border-radius: 7px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 30px rgba(35, 35, 35, 0.1);
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  height: 20.25em;
  resize: none;

  &:focus {
    outline: 3px solid rgba(215, 40, 128, 0.4);
  }

  &:disabled {
    background-color: transparent;
  }
`;

export const CreateButton = styled.button`
  background-color: #d72880;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.4s;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;

  &:hover,
  &:hover {
    box-shadow: 0px 0px 0px 5px rgba(215, 40, 128, 0.4);
  }
`;

