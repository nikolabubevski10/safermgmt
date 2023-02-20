import styled from 'styled-components';
import { Container as LinkButtonContainer } from '../shared/linkButton/LinkButtonStyles';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-start;
  align-items: center;
  margin-top: 45px;
  z-index: 1;

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.mobile.min}px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    height: auto;
  }

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.tabletLarge.min}px) {
    margin-top: 0px;
    flex-direction: row;
    align-items: center;
  }
`;

export const Frame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

  h2 {
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 20px;
  }

  h3 {
    width: 100%;
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 25px;
  }

  ${LinkButtonContainer} {
    width: 100%;
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
  }

  p {
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 20px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    margin-top: -80px;
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

export const Screens = styled.img`
  margin-top: 8vw;
  width: 100%;
  max-width: 750px;
  margin-left: auto;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    margin-top: 150px;
    width: 50vw;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
`;
