import create from 'zustand';

export const useLayoutStore = create(set => ({
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
}));
