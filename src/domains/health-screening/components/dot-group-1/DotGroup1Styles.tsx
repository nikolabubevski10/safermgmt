import styled from 'styled-components';

export const Svg = styled.svg`
  z-index: 0;
  display: none;
  position: absolute;
  fill: ${({ theme }) => theme.secondaryBlueMedium};
  opacity: 0.6;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: block;
    height: 352px;
    bottom: 25px;
    left: 25px;
  }
`;
