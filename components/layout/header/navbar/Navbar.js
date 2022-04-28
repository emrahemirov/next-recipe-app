import { v4 as uuidv4 } from 'uuid';
import useTranslation from 'next-translate/useTranslation';
//Lib
import { navbarItems } from '../../../../lib/navbarItems';
//Store
import { useLayoutStore } from '../../../../store/store';
//Component
import NavbarItem from './navbar-item/NavbarItem';
//Style
import { StyledNavbar } from './Navbar.styled';

const Navbar = () => {
  const isMenuOpened = useLayoutStore(state => state.isMenuOpened);
  const { t } = useTranslation();

  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].title = t(`header:navButtonTitles.${i}`);
  }

  return (
    <StyledNavbar
      isMenuOpened={isMenuOpened}
      direction='row'
      axisX='space-between'
      axisY='center'
    >
      {navbarItems.map(navbarItem => {
        return (
          <NavbarItem
            key={uuidv4()}
            title={navbarItem.title}
            path={navbarItem.path}
            svgTitle={navbarItem.svgTitle}
          />
        );
      })}
    </StyledNavbar>
  );
};

export default Navbar;
