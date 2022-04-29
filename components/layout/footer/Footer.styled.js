import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../styles/common/Container.styled';

export const StyledFooter = styled.div`
  ${FlexContainer}
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};
  font-family: ${({ theme }) =>
    css`
      ${theme.fontFamilies.text}
    `};
  width: 100%;
  padding: 2rem 5rem;
  gap: 3rem;

  box-shadow: ${({ theme }) =>
    css`
      ${theme.boxShadows.footer}
    `};

  @media (max-width: 27em) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LeftContainer = styled.div`
  ${FlexContainer}
  @media (max-width: 64em) {
    flex-direction: column;
  }
`;
