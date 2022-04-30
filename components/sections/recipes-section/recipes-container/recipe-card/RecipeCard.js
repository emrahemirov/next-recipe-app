import Image from 'next/image';
import { useRouter } from 'next/router';
//Style
import {
  StyledRecipeCard,
  ImageContainer,
  HeaderContainer,
  Header
} from './RecipeCard.styled';

const RecipeCard = ({ header, imageSource, id }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`${router.pathname}/${id}`);
  };

  return (
    <StyledRecipeCard onClick={handleCardClick}>
      <ImageContainer>
        <Image
          src={imageSource}
          alt='recipe image'
          width='480'
          height='270'
        ></Image>
      </ImageContainer>
      <HeaderContainer>
        <Header>{header}</Header>
      </HeaderContainer>
    </StyledRecipeCard>
  );
};

export default RecipeCard;
