import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  position: absolute;
  max-width: 1216px;
  max-height: 796px;
  overflow: hidden;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    width: 106.8%;
    margin-left: -3.5vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    width: 100%;
    margin-left: 0px;
  }
`;
export const Svg = styled.svg`
  max-width: 1216px;
  max-height: 796px;
`;

export const Path = styled.path`
  mix-blend-mode: overlay;
`;
