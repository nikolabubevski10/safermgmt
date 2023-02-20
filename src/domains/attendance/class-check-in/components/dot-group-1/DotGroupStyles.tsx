import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.secondaryBlueLight};
  position: absolute;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    height: 220px;
    top: calc(100% - 230px);
    left: calc(100% - 277px);
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 323px;
    top: calc(100% - 343px);
    left: calc(100% - 407px);
  }
`;
