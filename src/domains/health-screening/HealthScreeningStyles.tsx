import styled from 'styled-components';
import { Container as StepProgressContainer } from './components/step-progress/StepProgressStyles';
import { MainActionButton } from './shared/SharedStyles';

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

  ${MainActionButton} {
    margin-top: 50px;
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

export const DesktopTriangleLeft = styled.img`
  display: none;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 48vw;
  max-height: 475px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: block;
  }
`;

export const TriangleRight = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 44vw;
  max-height: 455px;
  min-height: 192px;
`;

export const MobileTriangleLeft = styled.img`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    display: none;
  }
`;
