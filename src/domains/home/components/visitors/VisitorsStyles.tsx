import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-start;
  align-items: center;
  margin-top: 45px;

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.mobile.min}px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    height: auto;
  }

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.tabletLarge.min}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Frame = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  h2 {
    text-align: left;
    width: 100%;
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 20px;
  }

  p {
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 20px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    margin-top: 50px;
    padding-left: ${({ theme }) => theme.homepageLeftMarginMobile};
    padding-right: ${({ theme }) => theme.homepageLeftMarginMobile};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginTablet};
    padding-right: ${({ theme }) => theme.homepageLeftMarginTablet};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    margin-top: 0px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginDesktop};
    padding-right: ${({ theme }) => theme.homepageLeftMarginDesktop};
  }
`;

export const CheckInImg = styled.img`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    height: 96vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 80vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    height: 47.2vw;
  }
`;

export const CheckInImgContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;
