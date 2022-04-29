import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../../styles/common/Container.styled';

export const StyledFollowContainer = styled.div`
  ${FlexContainer}
`;

export const Header = styled.h1`
  display: block;
  color: ${({ theme }) => css`rgb(${theme.colors.secondaryRGB})`};
  text-decoration: underline;
`;

export const SocialMediaContainer = styled.div`
  ${FlexContainer}
  margin-top: 1rem;
`;
