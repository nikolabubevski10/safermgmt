import styled from 'styled-components';

export const Svg = styled.svg`
  position: relative;
  fill: ${({ theme }) => theme.secondaryBlueLight};
  height: 59vw;
  right: -3px;
  top: 230px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 468px;
    right: 0px;
    top: 407px;
  }
`;
