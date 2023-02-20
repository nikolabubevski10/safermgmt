import styled from 'styled-components';

export const Svg = styled.svg`
  z-index: 0;
  position: absolute;
  fill: ${({ theme }) => theme.secondaryBlueLight};
  height: 410px;
  display: none;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: block;
    right: 25px;
    top: 280px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    display: block;
    right: 25px;
    top: 350px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    display: none;
  }
`;
