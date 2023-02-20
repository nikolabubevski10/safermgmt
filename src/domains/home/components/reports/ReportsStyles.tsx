import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  margin-top: 90px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  z-index: 1;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-top: 150px;
  }

  h2 {
    z-index: 3;
    text-align: left;
    width: 100%;
    max-width: 880px;
    margin-bottom: 20px;
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tablet.min}px) {
      text-align: center;
    }
  }

  h3 {
    margin-top: 100px;
    margin-bottom: 50px;
    text-align: left;
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.mobileLarge.min}px) {
      text-align: center;
    }
  }

  p {
    z-index: 3;
    max-width: 880px;
    margin-bottom: 20px;
    text-align: left;
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tablet.min}px) {
      text-align: center;
    }
  }
`;

export const BackgroundImg = styled.img`
  position: absolute;
  z-index: 1;
  left: 0px;
  height: 61vw;
  max-height: 1135px;
  left: 0px;
  top: 22px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    top: -8vw;
  }
`;

export const Frame = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginMobile};
    padding-right: ${({ theme }) => theme.homepageLeftMarginMobile};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginTablet};
    padding-right: ${({ theme }) => theme.homepageLeftMarginTablet};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginDesktop};
    padding-right: ${({ theme }) => theme.homepageLeftMarginDesktop};
  }
`;

export const ReportsImg = styled.img`
  margin-top: 70px;
  z-index: 6;
  width: 83.5vw;
  max-width: 1140px;
`;

export const Checklist = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1000px;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DotGroupContainer = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
`;

export const ChecklistItemColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
`;
