import styled, { css } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: transform 0.2s;

  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
