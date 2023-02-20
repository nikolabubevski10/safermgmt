import styled from 'styled-components';

export const Svg = styled.svg`
  z-index: 0;
  position: absolute;
  fill: ${({ theme }) => theme.secondaryBlueLight};
  height: 212px;
  display: block;
  right: 10px;
  bottom: 125px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobileLarge.min}px) {
    bottom: 180px;
    right: 20px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: none;
  }
`;
