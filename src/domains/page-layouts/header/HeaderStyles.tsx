import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopNavText = styled.div<{
  isActive?: boolean;
}>`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.secondaryFontDark};
  opacity: ${({ isActive }) => (isActive ? '0.5' : '1')};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  z-index: 10;

  &.desktop {
    @media (max-width: ${({ theme }) => theme.widthTablet}) {
      display: none;
    }
`;

export const Container = styled.div`
  z-index: 2;
  display: flex;
  margin-top: ${({ theme }) => theme.pageTopMarginDesktop};
  margin-left: ${({ theme }) => theme.homepageLeftMarginMobile};

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.mobile.min}px) {
    flex-direction: column;
    align-items: flex-start;

    ${TopNavText} {
      margin-left: 0px;
      margin-top: 20px;
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-left: ${({ theme }) => theme.homepageLeftMarginTablet};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    flex-direction: row;
    align-items: center;

    ${TopNavText} {
      margin-left: 60px;
      margin-top: 0px;
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    margin-left: ${({ theme }) => theme.homepageLeftMarginDesktop};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
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

export const StyledLink = styled(Link)`
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  line-height: inherit;
  margin: 0px;
  text-decoration: none;
  z-index: 10;
`;
