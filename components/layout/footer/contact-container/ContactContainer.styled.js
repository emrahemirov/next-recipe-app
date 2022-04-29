import styled, { css } from 'styled-components';

export const StyledContactContainer = styled.div`
  margin-left: 7rem;

  @media (max-width: 64em) {
    margin-left: 0;
    margin-top: 2rem;
    align-self: flex-start;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => css`rgb(${theme.colors.secondaryRGB})`};
  text-decoration: underline;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 1.6rem;

  @media (max-width: 64em) {
    margin: 0.5rem 0;
  }
`;
