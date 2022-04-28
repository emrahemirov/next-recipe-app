import styled, { css } from 'styled-components';
import { Button } from '../../../../../styles/common/Button.styled';
import { FlexContainer } from '../../../../../styles/common/Container.styled';

export const StyledNavbarItem = styled(Button)`
  ${FlexContainer}
  font-size: 3rem;
  margin: 0 2rem;
  border-radius: 30px;
  padding: 0.5rem 2rem;
  font-family: ${({ theme }) => css`
    ${theme.fontFamilies.menu}
  `};
  color: ${({ theme }) => css`rgb(${theme.colors.mainRGB})`};

  @media (max-width: 48em) {
    margin: 1rem 0;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) =>
        css`rgba(${theme.colors.mainRGB},0.2)`};
    `}

  ${({ isSelected }) =>
    !isSelected &&
    css`
      :hover {
        background-color: ${({ theme }) =>
          css`rgba(${theme.colors.secondaryRGB},0.2)`};
      }
    `}
`;

export const ImageContainer = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 2rem;

  span {
    width: 100%;
    height: 100%;
  }
`;
