import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 200px;
  p {
    padding-bottom: 15px;
    padding-top: 15px;
  }

  h1 {
    padding-top: 80px;
  }

  h2 {
    padding-top: 40px;
  }
`;

export const Inner = styled.div`
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
