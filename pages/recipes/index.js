import Head from 'next/head';
import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
//Component
import RecipesSection from '../../components/sections/recipes-section/RecipesSection';
//Store
import { useRecipesStore } from '../../store/store';

const RecipesPage = ({ recipes }) => {
  const { t } = useTranslation();

  const setRecipes = useRecipesStore(state => state.setRecipes);

  const pageTitle = t('recipesPage:pageTitle');

  useEffect(() => {
    setRecipes(recipes);
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <RecipesSection />;
    </>
  );
};

export default RecipesPage;

export async function getServerSideProps(context) {
  const { pageIndex, category, headerIncludes } = context.query;

  let string = `https://recipes-node-app.herokuapp.com/recipes`;

  if (pageIndex) string += `?pageIndex=${pageIndex}`;
  if (category) string += `&category=${category}`;
  if (headerIncludes) string += `&headerIncludes=${headerIncludes}`;

  const response = await fetch(string);

  const recipes = await response.json();

  if (recipes.length > 0) return { props: { recipes } };
  else return { props: {} };
}
