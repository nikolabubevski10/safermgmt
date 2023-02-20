import styled from 'styled-components';
import { MainActionButton } from '../shared/sharedStyles';

export const Container = styled.div`
  margin-top: 70px;
  text-align: center;
  position: relative;

  h2 {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  h3 {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  ${MainActionButton} {
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.mobile.min}px) {
      margin-top: 60px;
    }
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tabletLarge.min}px) {
      margin-top: 120px;
    }
  }

  p {
    text-align: center;
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.mobile.min}px) {
      max-width: ${({ theme }) => theme.homepageTextBlockMaxWidth};
    }

    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tablet.min}px) {
      text-align: center;
      max-width: 650px;
    }

    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.tabletLarge.min}px) {
      text-align: center;
      max-width: 850px;
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
`;

export const PContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BgImg = styled.img`
  position: absolute;
  width: 100%;
  left: 0px;
  top: 20vw;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    top: 60vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    top: 30vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    top: 0vw;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: calc(80px - ${({ theme }) => theme.surveyCardsRightMargin});
  flex-wrap: wrap;
  margin-left: 0px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-left: ${({ theme }) => theme.surveyCardsRightMargin};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
