import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useLayoutStore = create(
  persist(
    set => ({
      isMenuOpened: false,
      toggleMenuCondition: () =>
        set(state => ({ isMenuOpened: !state.isMenuOpened })),
      themeMode: 'dark',
      toggleThemeMode: () =>
        set(state =>
          state.themeMode === 'dark'
            ? { themeMode: 'light' }
            : { themeMode: 'dark' }
        )
    }),
    {
      name: 'layout-storage',
      getStorage: () => sessionStorage
    }
  )
);

export const useRecipesStore = create(set => ({
  recipes: undefined,
  recipeNotFound: undefined,
  setRecipes: data =>
    set(() => ({
      recipes: data
    })),
  setRecipeNotFound: data =>
    set(() => ({
      recipeNotFound: data
    }))
}));
