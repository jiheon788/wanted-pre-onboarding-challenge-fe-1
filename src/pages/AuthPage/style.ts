import styled, { css } from "styled-components";

export const Container = styled.div`
  backdrop-filter: blur(5.5px);
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.01);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(35, 35, 35, 0.1);
  color: #232323;
  height: 600px;
  padding: 30px 25px;
  width: 800px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
`;
