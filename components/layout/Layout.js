//Component
import Header from './header/Header';
import Footer from './footer/Footer';
//Style
import { StyledLayout } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
