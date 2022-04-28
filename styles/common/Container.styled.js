import styled, { css } from 'styled-components';

export const FlexContainer = css`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction &&
    css`
      ${direction}
    `};

  ${({ direction, axisX }) =>
    direction && axisX && direction.includes('row')
      ? css`
          justify-content: ${axisX};
        `
      : css`
          align-items: ${axisX};
        `};

  ${({ direction, axisY }) =>
    direction && axisY && direction.includes('row')
      ? css`
          align-items: ${axisY};
        `
      : css`
          justify-content: ${axisY};
        `};
`;
