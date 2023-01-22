import styled, { css } from 'styled-components';

export const ToolBoxDiv = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const IconSpan = styled.span`
  border-radius: 100%;
  padding: 10px;
  backdrop-filter: blur(5.5px);
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px rgba(35, 35, 35, 0.1);
  cursor: pointer;
  font-weight: bold;
  color: #232323;
  font-size: 33px;
  transition: all 0.3s;

  &:hover {
    color: #d72880;
  }
`;
