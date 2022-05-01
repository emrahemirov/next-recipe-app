import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../styles/common/Container.styled';

export const StyledRecipeDetailsSection = styled.section`
  ${FlexContainer}
  flex-wrap:wrap;
  margin: 4rem 10rem;
  padding: 0 4rem;
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};
  font-family: ${({ theme }) =>
    css`
      ${theme.fontFamilies.text}
    `};

  @media (max-width: 48em) {
    margin: 4rem 2rem;
    padding: 0 3rem;
  }

  @media (max-width: 30em) {
    margin: 4rem 0;
    padding: 0 2rem;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  width: 48rem;
  height: 26rem;
  margin-right: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 39em) {
    width: 32rem;
    height: 18rem;
  }

  @media (max-width: 30em) {
    width: 24rem;
    height: 13rem;
  }

  @media (max-width: 21em) {
    width: 16rem;
    height: 9rem;
  }
`;

export const InfoContainer = styled.div`
  width: 30%;

  @media (max-width: 64em) {
    width: 100%;
  }
`;

export const TextsContainer = styled.div`
  width: 100%;
`;

export const H1 = styled.h1`
  word-wrap: break-word;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 30em) {
    font-size: 1.6rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0;
  text-decoration: underline;

  @media (max-width: 30em) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  text-indent: 2rem;

  @media (max-width: 30em) {
    font-size: 1.4rem;
  }
`;

export const Paragraph = styled.p`
  margin: 2rem 0;
  text-align: left;
  font-size: 1.6rem;
  text-indent: 2rem;

  @media (max-width: 30em) {
    font-size: 1.4rem;
  }
`;
