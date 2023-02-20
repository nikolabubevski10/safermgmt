import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-top: 30px;
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

export const InnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    flex-direction: row;
  }
`;

export const StyledSvg = styled.svg`
  height: 100%;
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.weightBold};
  color: ${({ theme }) => theme.secondaryBlueMedium};
  font-size: 18px;
  line-height: 22px;
  margin: 0px 0px 0px 9px;
`;

export const LogoSpanDark = styled.span`
  color: ${({ theme }) => theme.primaryBlueDark};
  margin: 0px 0px 0px 4px;
`;

export const Time = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-weight: ${({ theme }) => theme.weightSemibold};
  display: flex;
  align-items: center;
  margin-right: 15px;
  margin-top: 5px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    position: relative;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    position: absolute;
    left: 48vw;
  }
`;

export const ExitContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ButtonText = styled.div`
  margin-right: 8px;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.secondaryBlueDark};
  user-select: none;
`;
