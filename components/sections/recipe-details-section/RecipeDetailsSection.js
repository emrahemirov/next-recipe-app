import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
//Style
import {
  StyledRecipeDetailsSection,
  ImageContainer,
  InfoContainer,
  TextsContainer,
  H1,
  H2,
  Paragraph,
  Text
} from './RecipeDetailsSection.styled';

const RecipeDetailsSection = ({ recipe }) => {
  const { t } = useTranslation();

  const date = new Date(recipe.date);

  return (
    <StyledRecipeDetailsSection>
      {recipe && (
        <>
          <ImageContainer>
            {
              <Image
                src={recipe.imageSource}
                alt='recipe photo'
                width='480'
                height='270'
                layout='responsive'
                priority={true}
              />
            }
          </ImageContainer>
          <InfoContainer>
            <H1>{recipe.header}</H1>
            <Text>{date.toLocaleString()}</Text>
            <Text>{recipe.category}</Text>
          </InfoContainer>
          <TextsContainer>
            <Paragraph>{recipe.introParagraph}</Paragraph>
            <H2>{t('recipeDetailsPage:ingredients')}</H2>
            {recipe.ingredients.map(ingredient => {
              return <Text key={uuidv4()}>{ingredient}</Text>;
            })}
            <H2>{t('recipeDetailsPage:howToMake')}</H2>
            <Paragraph>{recipe.introParagraph}</Paragraph>
          </TextsContainer>
        </>
      )}
    </StyledRecipeDetailsSection>
  );
};

export default RecipeDetailsSection;
