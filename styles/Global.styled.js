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
`;

export default GlobalStyles;
