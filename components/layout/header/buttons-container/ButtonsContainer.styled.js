import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../../styles/common/Container.styled';

export const StyledButtonsContainer = styled.div`
  ${FlexContainer}

  ${({ isMenuOpened }) =>
    isMenuOpened &&
    css`
      @media (max-width: 48em) {
        margin-top: 2rem;
      }
    `}
`;
