import styled from 'styled-components';

const HEIGHT = 114;
export const Svg = styled.svg`
  display: block;
  fill: ${({ theme }) => theme.secondaryBlueMedium};
  height: ${HEIGHT}px;
  top: calc(100% - ${HEIGHT + 20}px);
  left: 20px;
  opacity: 0.6;
  position: absolute;
  z-index: 0;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: none;
  }
`;
