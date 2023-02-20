import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.secondaryGrayDark};
  height: 15px;
  width: 15px;
  cursor: grab;
  :active {
    cursor: grabbing;
  }
`;
