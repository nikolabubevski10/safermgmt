import styled from 'styled-components';

export const Svg = styled.svg`
  z-index: 0;
  height: 309px;
  left: 20px;
  top: 20px;
  position: absolute;
  fill: ${({ theme }) => theme.secondaryBlueMedium};
  opacity: 0.6;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 497px;
    top: 25px;
    left: 25px;
  }
`;
