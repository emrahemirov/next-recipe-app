import Image from 'next/image';
//Store
import { useLayoutStore } from '../../../../../store/store';
//Style
import { HeaderButton, ImageContainer } from './HeaderButton.styled';

const ThemeButton = () => {
  const themeMode = useLayoutStore(state => state.themeMode);
  const toggleThemeMode = useLayoutStore(state => state.toggleThemeMode);
  const svgTitle = themeMode === 'dark' ? 'sun' : 'moon';

  const handleThemeMode = () => {
    toggleThemeMode();
  };

  return (
    <HeaderButton
      onClick={handleThemeMode}
      key={svgTitle}
      activeScale={true}
      axisX='center'
      axisY='center'
    >
      <ImageContainer direction='row' axisX='center'>
        <Image
          src={`/icons/${svgTitle}.svg`}
          alt='flag'
          width='30'
          height='30'
        />
      </ImageContainer>
    </HeaderButton>
  );
};

export default ThemeButton;
