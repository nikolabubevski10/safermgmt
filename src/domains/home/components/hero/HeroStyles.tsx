import styled from 'styled-components';
import { MainActionButton } from '../shared/sharedStyles';

export const Container = styled.div`
  z-index: 1;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    margin-left: ${({ theme }) => theme.homepageLeftMarginMobile};
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-left: ${({ theme }) => theme.homepageLeftMarginTablet};
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    margin-left: ${({ theme }) => theme.homepageLeftMarginDesktop};
  }
`;

export const Frame = styled.div`
  z-index: 2
  overflow: visible;
  display: flex;
  flex-direction: column;
  padding-top: 450px;
  max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
  overflow: hidden;
  padding-right: ${({ theme }) => theme.homepageLeftMarginMobile};

  ${MainActionButton} {
    margin-top: 50px;
  }

  h1 {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.mobile.min}px) {
    padding-top: 84vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.mobileLarge.min}px) {
    padding-top: 101vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.tablet.min}px) {
    padding-top: 54vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.tabletLarge.min}px) {
    padding-top: 104px;
    padding-right: 0px;
  }
`;

export const H3Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    flex-direction: row;
  }

  h3 {
    :first-child {
      margin-right: 8px;
    }
  }
`;
