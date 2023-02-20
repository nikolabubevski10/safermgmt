import styled from 'styled-components';
import { MainActionButton } from '../shared/sharedStyles';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  position: relative;

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

  p {
    max-width: 880px;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tablet.min}px) {
      text-align: center;
    }
  }

  h1 {
    margin-bottom: 20px;
    text-align: left @media only screen and
      (min-width: ${({ theme }) => theme.sizeRanges.tablet.min}px) {
      text-align: center;
    }
  }

  h3 {
    margin-bottom: 25px;
  }

  ${MainActionButton} {
    margin-top: 80px;
  }
`;

export const ThreeDeviceMashup = styled.img`
  z-index: 1;
  width: 83.5vw;
  max-width: 1350px;
`;

export const A = styled.a`
  text-decoration: none;
  outline: none;
`;
