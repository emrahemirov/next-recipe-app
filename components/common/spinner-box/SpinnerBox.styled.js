import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../styles/common/Container.styled';

export const StyledSpinnerBox = styled.div`
  ${FlexContainer}
  position:relative;
  width: 100%;
  height: 40vh;
`;

export const Spinner = styled.div`
  border-radius: 50%;
  border-top: 16px solid rgb(${({ theme }) => theme.colors.mainRGB}, 1);
  border-right: 12px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
  border-bottom: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
  border-left: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
  width: 12rem;
  height: 12rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      border-top: 16px solid rgb(${({ theme }) => theme.colors.mainRGB}, 1);
      border-right: 12px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
      border-bottom: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
      border-left: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
      width: 120px;
      height: 120px;
    }

    12.5% {
      border-top: 12px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
      border-right: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
      border-bottom: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
      border-left: 0px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0);
      width: 110px;
      height: 110px;
    }

    25% {
      border-top: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
      border-right: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
      border-bottom: 0px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0);
      border-left: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
      width: 100px;
      height: 100px;
    }

    37.5% {
      border-top: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
      border-right: 0px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0);
      border-bottom: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
      border-left: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
      width: 90px;
      height: 90px;
    }

    50% {
      border-top: 0px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0);
      border-right: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
      border-bottom: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
      border-left: 12px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
      width: 80px;
      height: 80px;
    }

    62.5% {
      border-top: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
      border-right: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
      border-bottom: 12px solid
        rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
      border-left: 16px solid rgb(${({ theme }) => theme.colors.mainRGB}, 1);
      width: 90px;
      height: 90px;
    }

    75% {
      border-top: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
      border-right: 12px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
      border-bottom: 16px solid rgb(${({ theme }) => theme.colors.mainRGB}, 1);
      border-left: 12px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
      width: 100px;
      height: 100px;
    }

    87.5% {
      border-top: 12px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
      border-right: 16px solid rgb(${({ theme }) => theme.colors.mainRGB}, 1);
      border-bottom: 12px solid
        rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
      border-left: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
      width: 110px;
      height: 110px;
    }

    100% {
      transform: rotate(360deg);
      border-top: 16px solid rgb(${({ theme }) => theme.colors.mainRGB}, 1);
      border-right: 12px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.75);
      border-bottom: 8px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.5);
      border-left: 4px solid rgb(${({ theme }) => theme.colors.mainRGB}, 0.25);
      width: 120px;
      height: 120px;
    }
  }
`;

export const Text = styled.p`
  width: 100%;
  font-family: ${({ theme }) =>
    css`
      ${theme.fontFamilies.text}
    `};
  color: ${({ theme }) => css`rgb(${theme.colors.mainRGB})`};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 27em) {
    font-size: 1.6rem;
  }
`;
