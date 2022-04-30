//Component
import RecipeCard from './recipe-card/RecipeCard';
import RecipeNotFound from './recipe-not-found/RecipeNotFound';
//Store
import { useRecipesStore } from '../../../../store/store';
//Style
import { StyledRecipesContainer } from './RecipesContainer.styled';

const RecipesContainer = () => {
  const recipes = useRecipesStore(state => state.recipes);
  console.log(
    '🚀 ~ file: RecipesContainer.js ~ line 11 ~ RecipesContainer ~ recipes',
    recipes
  );

  return (
    <StyledRecipesContainer direction='row' axisX='center' axisY='flex-start'>
      {recipes &&
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
      {!recipes && <RecipeNotFound />}
    </StyledRecipesContainer>
  );
};

export default RecipesContainer;
