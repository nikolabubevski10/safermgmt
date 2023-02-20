import styled from 'styled-components';
import { LightActionButton } from '../shared/sharedStyles';

export const Svg = styled.svg`
  height: 9px;
  width: 9px;
  fill: ${({ theme }) => theme.primaryBlueLight};
  margin-right: 10px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-start;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.mobile.min}px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    height: auto;
  }

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.tabletLarge.min}px) {
    flex-direction: row;
    align-items: center;
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

  h2 {
    text-align: left;
    width: 100%;
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 20px;
  }

  p {
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 20px;
  }

  ${LightActionButton} {
    margin-bottom: 15px;
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tabletLarge.min}px) {
      margin-left: -30px;
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
      theme.sizeRanges.tabletLarge.min}px) {
    margin-top: 0px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginDesktop};
    padding-right: ${({ theme }) => theme.homepageLeftMarginDesktop};
  }
`;

export const PhoneImg = styled.img`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    height: 96vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    height: 94vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    height: 60.43vw;
  }
`;

export const PhoneImgContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;

export const UnselectedItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};

  h4 {
    opacity: 0.5;
    text-align: left;
    width: 100%;
    max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    margin-bottom: 34px;
  }
`;

export const SelectedItemContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
`;

export const Selection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-bottom: 15px;
  width: 258px;
  height: 60px;
  background: ${({ theme }) => theme.primaryWhite}};
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};

  box-shadow: 0px 5px 25px 0px
    ${({ theme }) => theme.secondaryGrayDark}80;
`;
