import styled from 'styled-components';
import { Container as LinkButtonContainer } from '../shared/linkButton/LinkButtonStyles';

export const Container = styled.div`
  display: flex;
  margin-top: 70px;
  z-index: 1;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const WomanImg = styled.img`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    height: 100vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 100vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    height: 62vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    height: 835px;
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
  margin-top: 20px;
  padding-left: ${({ theme }) => theme.homepageLeftMarginMobile};
  padding-right: ${({ theme }) => theme.homepageLeftMarginMobile};

  h2 {
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 20px;
  }

  p {
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 20px;
  }

  ${LinkButtonContainer} {
    width: 100%;
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
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
    margin-top: 0px;
    padding-left: ${({ theme }) => theme.homepageLeftMarginDesktop};
    padding-right: ${({ theme }) => theme.homepageLeftMarginDesktop};
  }
`;
