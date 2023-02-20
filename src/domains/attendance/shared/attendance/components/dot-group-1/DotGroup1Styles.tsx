import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.secondaryBlueLight};
  position: absolute;
  z-index: 0;

  left: 17px;
  top: 17px;
  height: 308px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 468px;
    left: 25px;
    top: 25px;
  }
`;
