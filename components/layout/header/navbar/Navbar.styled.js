import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../../styles/common/Container.styled';

export const StyledNavbar = styled.nav`
  ${FlexContainer}

  @media (max-width: 48em) {
    ${({ isMenuOpened }) =>
      isMenuOpened &&
      css`
        flex-direction: column;
      `}
  }
`;
