import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../../styles/common/Container.styled';
import { Button } from '../../../../styles/common/Button.styled';

export const StyledFilterContainer = styled.div`
  ${FlexContainer};
  gap: 1rem;
  min-width: 50%;
  margin: 1rem auto;

  input:nth-child(2) {
    appearance: none;
    width: 10rem;
  }

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const commonStyles = css`
  border-radius: 5px;
  outline: none;
  font-weight: 700;
  border: none;
  background-color: transparent;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => css`rgb(${theme.themeStyles.textColorRGB})`};
  box-shadow: ${({ theme }) =>
    css`
      ${theme.boxShadows.filter}
    `};
`;

export const Input = styled.input`
  ${commonStyles}
`;

export const Select = styled.select`
  ${commonStyles}
`;

export const Option = styled.option`
  color: rgb(0, 0, 0);
`;

export const SearchButton = styled(Button)`
  ${commonStyles};
  ${FlexContainer};
  padding: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
