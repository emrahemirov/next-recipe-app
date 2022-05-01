import styled, { css } from 'styled-components';

export const StyledRecipeCard = styled.div`
  height: 24rem;
  cursor: pointer;
  position: relative;
  margin: 4rem 3rem;
  border-radius: 20px;
  box-shadow: ${({ theme }) =>
    css`
      ${theme.boxShadows.card}
    `};
  transition: transform 0.2s, box-shadow 0.2s;

  :hover {
    transform: scale(1.05);
    box-shadow: none;
  }

  :hover div:nth-child(2) {
    background-color: ${({ theme }) =>
      css`
        rgba(${theme.colors.secondaryRGB},0.8)
      `};
    color: black;
  }

  @media (max-width: 48em) {
    height: 36rem;
  }

  @media (max-width: 32em) {
    height: 24rem;
  }

  @media (max-width: 27em) {
    height: 18rem;
    margin: 1.5rem 3rem;
  }
`;

export const ImageContainer = styled.div`
  width: 32rem;
  height: 18rem;
  border-radius: inherit;
  overflow: hidden;

  @media (max-width: 48em) {
    width: 48rem;
    height: 27rem;
  }

  @media (max-width: 32em) {
    width: 32rem;
    height: 18rem;
  }

  @media (max-width: 27em) {
    width: 24rem;
    height: 13.5rem;
  }
`;

export const HeaderContainer = styled.div`
  border-radius: 20px;
  position: absolute;
  overflow: hidden;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) =>
    css`
      rgb(${theme.themeStyles.backgroundColorRGB})
    `};
  color: ${({ theme }) =>
    css`
      rgb(${theme.themeStyles.textColorRGB})
    `};
  width: 95%;
  padding: 1.5rem;
  transition: background-color 0.2s, color 0.2s;
`;

export const Header = styled.h1`
  text-align: center;
  font-family: ${({ theme }) =>
    css`
      ${theme.fontFamilies.text}
    `};
  font-weight: 700;

  font-size: 1.3rem;

  @media (max-width: 48em) {
    font-size: 2rem;
  }

  @media (max-width: 32em) {
    font-size: 1.3rem;
  }

  @media (max-width: 27em) {
    font-size: 1.3rem;
  }
`;
