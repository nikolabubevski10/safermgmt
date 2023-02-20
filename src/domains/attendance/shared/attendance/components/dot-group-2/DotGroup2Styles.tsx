import styled from 'styled-components';

export const Svg = styled.svg`
  z-index: 0;
  fill: ${({ theme }) => theme.secondaryBlueLight};
  position: absolute;

  height: 220px;
  left: calc(100% - 280px);
  top: calc(100% - 238px);

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 323px;
    left: calc(100% - 406px);
    top: calc(100% - 353px);
  }
`;
