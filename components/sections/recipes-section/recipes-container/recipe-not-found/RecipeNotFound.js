import useTranslation from 'next-translate/useTranslation';
//Style
import { StyledRecipeNotFound } from './RecipeNotFound.styled';

const RecipeNotFound = () => {
  const { t } = useTranslation();

  return (
    <StyledRecipeNotFound>{t('recipesPage:notFound')}</StyledRecipeNotFound>
  );
};

export default RecipeNotFound;
