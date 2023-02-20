import styled from 'styled-components';
import { Container as StepProgressContainer } from './components/step-progress/StepProgressStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${StepProgressContainer} {
    width: 250px;
    margin-top: 25px;

    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.mobileLarge.min}px) {
      width: 326px;
    }
  }

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

export const Elipse = styled.img`
  height: 180px;
  position: absolute;
  top: calc(100% - 180px);
  right: 0px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 360px;
    top: calc(100% - 360px);
    right: 0px;
  }
`;
