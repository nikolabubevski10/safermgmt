import styled from 'styled-components';

export const MobileBg = styled.img`
  position: absolute;
  transform: scaleX(-1);
  height: 100vw;
  right: 0px;
  top: 100px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobileLarge.min}px) {
    display: none;
    height: 0px;
    width: 0px;
  }
`;

export const MobileHandDevice = styled.img`
  position: absolute;
  height: 115vw;
  right: 0px;
  top: 65px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobileLarge.min}px) {
    display: none;
  }
`;

export const MobileLargeImage = styled.img`
  display: none;
  position: absolute;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobileLarge.min}px) {
    display: block;
    top: 0px;
    right: 0px;
    height: 151vw;
    transform: scaleX(1);
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: none;
  }
`;

export const TabletImage = styled.img`
  display: none;
  position: absolute;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: block;
    top: 0px;
    right: 0px;
    height: 100vw;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    display: none;
  }
`;

export const DesktopBg = styled.img`
  position: absolute;
  display: none;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    display: block;
    top: -230px;
    height: 1550px;
    right: calc(50% - 1500px);
  }
`;

export const HandDeviceImg = styled.img`
  position: relative;
  z-index: 1;
  display: none;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    display: block;
    top: 80px;
    right: calc(70% - 1150px);
    height: 1000px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktopLarge.min}px) {
    top: 80px;
    right: -120px;
  }
`;

export const Container = styled.div`
  z-index: -3;
  position: absolute;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  top: 0px;
  height: 200vh;
  max-width: calc(100% - ${({ theme }) => theme.homepageLeftMarginMobile});
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    top: 0px;
    width: 100%;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobileLarge.min}px) {
    top: 0px;
    width: 100%;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    top: 0px;
    width: calc(100% - ${({ theme }) => theme.homepageLeftMarginTablet});
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    top: 0px;
    width: calc(100% - ${({ theme }) => theme.homepageLeftMarginTablet});
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    top: 0px;
    width: calc(100% - ${({ theme }) => theme.homepageLeftMarginDesktop});
  }
`;
