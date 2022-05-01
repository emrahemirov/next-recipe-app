import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../../styles/common/Container.styled';

export const StyledFollowContainer = styled.div`
  ${FlexContainer}
`;

export const Header = styled.h1`
  display: block;
  color: ${({ theme }) => css`rgb(${theme.colors.secondaryRGB})`};
  text-decoration: underline;

  @media (max-width: 27em) {
    font-size: 1.4rem;
  }
`;

export const SocialMediaContainer = styled.div`
  ${FlexContainer}
  margin-top: 1rem;
`;
