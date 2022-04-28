import { useRouter } from 'next/router';
import Image from 'next/image';
//Style
import { StyledNavbarItem, ImageContainer } from './NavbarItem.styled';

const NavbarItem = ({ title, path, svgTitle }) => {
  const router = useRouter();
  const isSelected = router.pathname === path;

  const handleButtonClick = () => {
    router.pathname != path && router.push(path);
  };

  return (
    <StyledNavbarItem
      isSelected={isSelected}
      direction='row'
      axisY='center'
      onClick={handleButtonClick}
    >
      <ImageContainer>
        <Image
          src={`/icons/${svgTitle}.svg`}
          alt='menu button image'
          width='50'
          height='50'
        />
      </ImageContainer>
      {title}
    </StyledNavbarItem>
  );
};

export default NavbarItem;
