import styled from 'styled-components';

export const Svg = styled.svg`
  height: 212px;
  z-index: 1;
  position: absolute;
  right: 15px;
  fill: ${({ theme }) => theme.secondaryBlueLight};
  top: -90px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 497px;
    right: 25px;
    top: -208px;
  }
`;
