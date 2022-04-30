//Component
import FilterContainer from './filter-container/FilterContainer';
import RecipesContainer from './recipes-container/RecipesContainer';
//Style
import { StyledRecipesSection } from './RecipesSection.styled';

const RecipesSection = () => {
  return (
    <StyledRecipesSection>
      <FilterContainer />
      <RecipesContainer />
    </StyledRecipesSection>
  );
};

export default RecipesSection;
