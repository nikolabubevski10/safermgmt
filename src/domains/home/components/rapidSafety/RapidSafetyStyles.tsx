import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;

  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    margin-top: 0px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const CloudImg = styled.img`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    height: 95vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 70vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    height: 43.4vw;
    max-height: 780px;
  }
`;

export const Frame = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginMobile};
    padding-right: ${({ theme }) => theme.homepageLeftMarginMobile};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginTablet};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginDesktop};
  }

  h2 {
    margin-bottom: 20px;
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
  }

  p {
    margin-bottom: 20px;
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
  }
`;

export const CloudContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
