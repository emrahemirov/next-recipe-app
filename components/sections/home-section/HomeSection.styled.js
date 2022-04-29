import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../styles/common/Container.styled';

export const StyledHomeSection = styled.section`
  margin: 4rem 0;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 38em) {
    margin: 2rem 0;
  }
`;

const Container = styled.div`
  ${FlexContainer}

  ${({ gridRow }) =>
    gridRow &&
    css`
      grid-row: ${gridRow};
    `}

  ${({ gridColumn }) =>
    gridColumn &&
    css`
      grid-column: ${gridColumn};
    `}
`;

export const ImageContainer = styled(Container)`
  margin: 1rem;
  border-radius: 20px;
  overflow: hidden;

  span {
    transition: transform 0.2s;
  }

  :hover {
    span {
      transform: scale(1.2);
    }
  }

  @media (max-width: 38em) {
    margin: 0.5rem;
  }
`;

export const TextContainer = styled(Container)`
  cursor: default;
  font-size: 6rem;
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};
  font-family: ${({ theme }) =>
    css`
      ${theme.fontFamilies.menu}
    `};

  @media (max-width: 64em) {
    font-size: 4rem;
  }

  @media (max-width: 48em) {
    font-size: 3rem;
  }

  @media (max-width: 38em) {
    font-size: 2rem;
  }
`;
