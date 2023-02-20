import styled from 'styled-components';

export const Subheading = styled.div`
  z-index: 5;
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.primaryBlueDark};
  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.tablet.min}px) {
  font-size: 25px;
  line-height: 36px;

`;

export const Container = styled.div`
  margin-bottom: 150px;
  margin-top: 100px;
  position: relative;
  z-index: 1;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    display: flex;
    justify-content: center;
    padding-left: ${({ theme }) => theme.homepageLeftMarginTablet};
    padding-right: ${({ theme }) => theme.homepageLeftMarginTablet};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginDesktop};
    padding-right: ${({ theme }) => theme.homepageLeftMarginDesktop};
  }

  h1 {
    z-index: 5;
    text-align: center;
    max-width: 850px;
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 40px;

    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.mobileLarge.min}px) {
      font-size: 40px;
      line-height: 50px;
    }
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tablet.min}px) {
      font-size: 50px;
      line-height: 60px;
    }
  }

  ${Subheading} {
    margin-bottom: 50px;
    text-align: center;
  }
`;

export const MobileBackground = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50px;
  box-shadow: 0px 30px 30px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    display: none;
  }
`;

export const DesktopBackground = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0px 30px 30px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};
  border-radius: 50px;
  max-width: 1200px;

  display: none;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    display: block;
  }
`;

export const Inner = styled.div`
  left: 0px;
  top: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;
