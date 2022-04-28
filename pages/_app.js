import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
//Component
import Layout from '../components/layout/Layout';
//Store
import { useLayoutStore } from '../store/store';
//Style
import {
  colors,
  fontFamilies,
  darkThemeStyles,
  lightThemeStyles,
  boxShadows
} from '../lib/theme';
import GlobalStyles from '../styles/Global.styled';

function MyApp({ Component, pageProps }) {
  const themeMode = useLayoutStore(state => state.themeMode);

  const [themeStyles, setThemeStyles] = useState(darkThemeStyles);

  useEffect(() => {
    themeMode === 'dark'
      ? setThemeStyles(darkThemeStyles)
      : setThemeStyles(lightThemeStyles);
  }, [themeMode]);

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
