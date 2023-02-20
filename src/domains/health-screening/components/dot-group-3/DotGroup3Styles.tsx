import styled from 'styled-components';

export const Svg = styled.svg`
  display: block;
  z-index: 0;
  height: 72px;
  left: 20px;
  bottom: 20px;
  position: absolute;
  fill: ${({ theme }) => theme.secondaryBlueMedium};
  opacity: 0.6;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: none;
  }
`;
