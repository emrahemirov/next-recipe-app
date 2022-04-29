import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../styles/common/Container.styled';
import { Button } from '../../../styles/common/Button.styled';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  ${FlexContainer};
  flex-wrap: wrap;
  padding: 2rem 2rem;
  box-shadow: ${({ theme }) =>
    css`
      ${theme.boxShadows.header}
    `};
`;

export const LogoContainer = styled.div`
  flex-grow: 3;

  svg {
    font-size: 6rem;
  }

  @media (max-width: 27em) {
    svg {
      font-size: 4.5rem;
    }
  }
`;

export const MenuButton = styled(Button)`
  display: none;

  svg {
    font-size: 3rem;
  }

  @media (max-width: 48em) {
    display: block;
  }
`;

export const MenuContainer = styled.div`
  ${FlexContainer}
  flex-grow: 2;

  @media (max-width: 48em) {
    ${({ isMenuOpened }) =>
      isMenuOpened
        ? css`
            padding: 1rem 0;
            width: 100%;
            flex-direction: column;
          `
        : css`
            display: none;
          `}
  }
`;
