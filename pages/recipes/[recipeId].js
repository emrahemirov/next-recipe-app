import Head from 'next/head';
//Component
import RecipeDetailsSection from '../../components/sections/recipe-details-section/RecipeDetailsSection';

const RecipeDetails = ({ recipe }) => {
  return (
    <>
      <Head>
        <title>Recipe Details</title>
      </Head>
      <RecipeDetailsSection recipe={recipe} />
    </>
  );
};

export default RecipeDetails;

export async function getStaticProps({ params }) {
  const recipeId = params.recipeId;

  const response = await fetch(
    `https://recipes-node-app.herokuapp.com/recipes/${recipeId}`
  );

  const recipe = await response.json();

  return { props: { recipe } };
}

export async function getStaticPaths(context) {
  return {
    paths: [{ params: { recipeId: '' } }],
    fallback: 'blocking'
  };
}
