import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
