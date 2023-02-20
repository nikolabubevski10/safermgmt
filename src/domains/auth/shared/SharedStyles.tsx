import styled from 'styled-components';

export const DesktopBackground = styled.img`
  position: absolute;
  display: none;
  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.tablet.min}px) {
    display: block;
    top: -295px;
    height: 1850px;
    right: calc(70% - 1800px);
  }
  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.desktop.min}px) {
    display: block;
    height: 1850px;
    right: -1000px;
  }
}
`;

export const MobileBackground = styled.img`
  position: absolute;
  height: 65vw;
  min-height: 234px;
  bottom: 0px;
  right: 0px;
  z-index: 0;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  height: 100vh;
`;
