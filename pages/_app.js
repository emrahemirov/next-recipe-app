import { ThemeProvider } from 'styled-components';
import {
  colors,
  fontFamilies,
  darkThemeStyles,
  lightThemeStyles,
  boxShadows
} from '../lib/theme';
import GlobalStyles from '../styles/Global.styled';

function MyApp({ Component, pageProps }) {
  const themeStyles = darkThemeStyles;

  const theme = {
    colors,
    fontFamilies,
    themeStyles,
    boxShadows
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
