import styled from 'styled-components';

interface IContainer {
  justify?: 'center' | 'end' | 'start';
}

export const Main = styled.main`
  flex-grow: 1; // used to keep footer at the bottom
  /* margin: ${({ theme }) => `${theme.pageTopMarginDesktop} 0`}; */
  display: flex;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    /* margin: ${({ theme }) => `${theme.pageTopMarginDesktopTablet} 0`}; */
  }
`;

export const Container = styled.div<IContainer>`
  z-index: 1;
  margin: 0 auto;
  padding: 0 113px;
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  width: 100%;

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
