import styled, { css } from 'styled-components';

export const FlexContainer = css`
  display: flex;
  flex-direction: ${({ direction }) =>
    css`
      ${direction}
    `};

  ${({ direction, axisX, axisY }) =>
    direction.includes('row')
      ? css`
          align-items: ${axisY};
          justify-content: ${axisX};
        `
      : css`
          align-items: ${axisX};
          justify-content: ${axisY};
        `};
`;
