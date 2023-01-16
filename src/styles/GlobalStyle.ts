import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset !important;
    -webkit-text-fill-color: #232323 !important;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(320deg, #eb92be, #ffef78, #63c9b4);
    height: inherit;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export default GlobalStyle;
