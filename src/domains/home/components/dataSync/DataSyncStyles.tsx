import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column-reverse;
  height: auto;
  margin-top: 70px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    margin-top: 0px;
    flex-direction: row;
    align-items: center;
  }
`;

export const Frame = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  width: 100%;

  h2 {
    font-size: 32px;
    line-height: 35px;
    margin-bottom: 20px;
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    text-align: left;
    width: 100%;
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.mobileLarge.min}px) {
      font-size: 40px;
      line-height: 50px;
    }
  }

  p {
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 20px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    margin-top: 0px;
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
    margin-top: 50px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginDesktop};
    padding-right: ${({ theme }) => theme.homepageLeftMarginDesktop};
  }
`;
