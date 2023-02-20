import styled from 'styled-components';
import { Svg as ArrowButton } from './components/arrowButton/ArrowButtonStyles';
import { MainActionButton } from '../shared/sharedStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;
export const LeftDotsContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 0px;
  overflow: visible;
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const RightDotsContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 0px;
  overflow: visible;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const Inner = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0px;

  margin-top: 60px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-top: 135px;
    min-height: 697px;
  }

  h2 {
    text-align: center;
  }

  h3 {
    margin-bottom: 15px;
    min-width: 150px;
    text-align: center;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
    max-width: 540px;
  }

  ${MainActionButton} {
    margin-top: 50px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    padding-left: ${({ theme }) => theme.homepageLeftMarginMobile};
    padding-right: ${({ theme }) => theme.homepageLeftMarginMobile};
  }
`;

export const ArrowButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 25px;

  ${ArrowButton} {
    :first-child {
      margin-right: 30px;
    }
  }
`;

export const SpotlightAvatar = styled.img`
  height: 140px;
  width: 140px;
  margin-top: 85px;
  margin-bottom: 20px;
  border-radius: 9999px;
`;

export const SchoolText = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.secondaryGrayDark};
`;
