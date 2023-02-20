import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.secondaryBlueLight};
  position: relative;
  height: 56vw;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 439px;
  }
`;
