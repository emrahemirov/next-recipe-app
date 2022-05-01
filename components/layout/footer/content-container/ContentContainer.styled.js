import styled from 'styled-components';
import { FlexContainer } from '../../../../styles/common/Container.styled';

export const StyledContentContainer = styled.div`
  ${FlexContainer};
  margin: 0 auto;

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  cursor: pointer;
  font-size: 1.6rem;

  margin-left: 1rem;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    margin-left: 0;
    margin-top: 1rem;
  }

  @media (max-width: 27em) {
    font-size: 1.2rem;
  }
`;
