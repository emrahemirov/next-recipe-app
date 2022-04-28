import styled, { css } from 'styled-components';
import { Button } from '../../../../../styles/common/Button.styled';
import { FlexContainer } from '../../../../../styles/common/Container.styled';

export const HeaderButton = styled(Button)`
  padding: 0.5rem;
  border-radius: 50%;
  margin: 0 1rem;

  :hover {
    outline: 2px solid
      ${({ theme }) => css`rgba(${theme.colors.secondaryRGB},0.7)`};
  }
`;

export const ImageContainer = styled.div`
  ${FlexContainer}
  border-radius: 50%;
  height: 3.2rem;
  width: 3.2rem;
  overflow: hidden;
`;
