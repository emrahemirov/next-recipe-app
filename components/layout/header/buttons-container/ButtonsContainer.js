//Component
import LangButton from './header-button/LangButton';
import ThemeButton from './header-button/ThemeButton';
//Store
import { useLayoutStore } from '../../../../store/store';
//Style
import { StyledButtonsContainer } from './ButtonsContainer.styled';

const ButtonsContainer = () => {
  const isMenuOpened = useLayoutStore(state => state.isMenuOpened);

  return (
    <StyledButtonsContainer
      isMenuOpened={isMenuOpened}
      direction='row'
      axisX='center'
    >
      <LangButton />
      <ThemeButton />
    </StyledButtonsContainer>
  );
};

export default ButtonsContainer;
