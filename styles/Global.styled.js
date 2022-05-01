import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    margin: 0;
    font-size: 62.5%;
  }


  body {
    background-color: ${({ theme }) =>
      css`rgb(${theme.themeStyles.backgroundColorRGB})`};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyles;
