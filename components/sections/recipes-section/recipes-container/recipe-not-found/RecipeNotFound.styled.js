import styled, { css } from 'styled-components';

export const StyledRecipeNotFound = styled.div`
  font-size: 6rem;
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};
  font-family: ${({ theme }) =>
    css`
      ${theme.fontFamilies.text}
    `};
  font-weight: 700;

  @media (max-width: 48em) {
    font-size: 3rem;
  }

  @media (max-width: 21em) {
    font-size: 2rem;
  }
`;
