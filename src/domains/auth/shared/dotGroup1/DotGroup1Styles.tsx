import styled from 'styled-components';

const HEIGHT = 294;
export const Svg = styled.svg`
  display: none;
  fill: ${({ theme }) => theme.secondaryBlueMedium};
  opacity: 0.6;
  position: absolute;
  z-index: 0;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: block;
    height: ${HEIGHT}px;
    top: calc(100% - ${HEIGHT + 25}px);
    left: 25px;
  }
`;
