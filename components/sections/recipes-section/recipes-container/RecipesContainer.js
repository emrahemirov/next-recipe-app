//Component
import RecipeCard from './recipe-card/RecipeCard';
import RecipeNotFound from './recipe-not-found/RecipeNotFound';
//Store
import { useRecipesStore } from '../../../../store/store';
//Style
import { StyledRecipesContainer } from './RecipesContainer.styled';
import SpinnerBox from '../../../common/spinner-box/SpinnerBox';

const RecipesContainer = () => {
  const recipes = useRecipesStore(state => state.recipes);
  const recipeNotFound = useRecipesStore(state => state.recipeNotFound);

  return (
    <StyledRecipesContainer direction='row' axisX='center' axisY='flex-start'>
      {!recipes && <SpinnerBox />}
      {recipes &&
        recipes.length > 0 &&
        recipes.map(recipe => {
          return (
            <RecipeCard
              key={recipe._id}
              header={recipe.header}
              imageSource={recipe.imageSource}
              id={recipe._id}
            />
          );
        })}
      {recipes && recipes.length == 0 && <RecipeNotFound />}
    </StyledRecipesContainer>
  );
};

export default RecipesContainer;
