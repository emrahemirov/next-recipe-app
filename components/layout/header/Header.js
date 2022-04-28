import { useRouter } from 'next/router';
//Component
import Navbar from './navbar/Navbar';
import ButtonsContainer from './buttons-container/ButtonsContainer';
//Icon
import ChefHatIcon from '../../../public/icons/hat-chef.svg';
import BurgerMenuIcon from '../../../public/icons/menu-burger.svg';
import CrossIcon from '../../../public/icons/cross.svg';
//Store
import { useLayoutStore } from '../../../store/store';
//Style
import {
  StyledHeader,
  LogoContainer,
  MenuButton,
  MenuContainer
} from './Header.styled';

const Header = () => {
  const router = useRouter();
  const isMenuOpened = useLayoutStore(state => state.isMenuOpened);
  const toggleMenuCondition = useLayoutStore(
    state => state.toggleMenuCondition
  );

  const handleMenuCondition = () => {
    toggleMenuCondition();
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <StyledHeader direction='row' axisX='space-between' axisY='center'>
      <LogoContainer onClick={handleLogoClick}>
        <ChefHatIcon />
      </LogoContainer>
      <MenuButton
        onClick={handleMenuCondition}
        hoverScale={true}
        activeScale={true}
      >
        {' '}
        {isMenuOpened ? <CrossIcon /> : <BurgerMenuIcon />}
      </MenuButton>
      <MenuContainer
        isMenuOpened={isMenuOpened}
        direction='row'
        axisX='space-between'
        axisY='center'
      >
        <Navbar />
        <ButtonsContainer />
      </MenuContainer>
    </StyledHeader>
  );
};

export default Header;
