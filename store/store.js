import create from 'zustand';

export const useLayoutStore = create(set => ({
  isMenuOpened: false,
  toggleMenuCondition: () =>
    set(state => ({ isMenuOpened: !state.isMenuOpened }))
}));
