import styled from 'styled-components';

export const A = styled.a`
  text-decoration: none;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 113px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 0 30px;
  }

  @media (max-width: ${({ theme }) => theme.widthMobile}) {
    padding: 0 20px;
  }
`;

export const FooterText = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.secondaryFontDarkTrans};
  font-weight: ${({ theme }) => theme.weightSemibold};
  cursor: pointer;
`;

export const FooterButton = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.secondaryFontDarkTrans};
  font-weight: ${({ theme }) => theme.weightSemibold};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.secondaryFontDark};
    text-decoration: underline;
  }
`;

export const Inner1 = styled.div`
  margin-bottom: 15px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-bottom: 25px;
  }
  margin-right: ${({ theme }) => theme.footerButtonSpacing};
`;

export const Inner2 = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-bottom: 25px;
  }
  display: flex;
  align-items: center;

  ${FooterButton} {
    margin-left: ${({ theme }) => theme.footerButtonSpacing};
    :first-child {
      margin-left: 0px;
    }
  }
`;

export const Inner3 = styled.div`
  margin-bottom: 15px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tablet.min}px) {
    margin-bottom: 25px;
  }

  flex: 1;
  display: flex;
  align-items: center;
`;

export const InnerColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    flex-direction: row;
    width: auto;
    flex: 1;
  }
`;

export const BackToTopButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    padding-right: 25px;
    flex: 0;
  }
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0;

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    flex: 1;
    justify-content: flex-end;
  }
`;
