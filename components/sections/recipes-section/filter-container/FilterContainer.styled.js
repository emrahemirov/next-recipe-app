import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../../styles/common/Container.styled';
import { Button } from '../../../../styles/common/Button.styled';

export const StyledFilterContainer = styled.div`
  ${FlexContainer};

  width: 50%;
  margin: 1rem auto;

  input:nth-child(2) {
    appearance: none;
    width: 10rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
  margin-left: 3rem;
`;

export const Select = styled.select`
  ${commonStyles}
  margin-left: 5rem;
`;

export const Option = styled.option`
  color: rgb(0, 0, 0);
`;

export const SearchButton = styled(Button)`
  ${commonStyles};
  ${FlexContainer};
  margin-left: 3rem;
  padding: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
