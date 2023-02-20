import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: ${({ theme }) => theme.flexColumn};
  background-color: ${({ theme }) => theme.primaryWhite};
  min-height: 100vh;
  width: ${({ theme }) => theme.widthFull};
`;

export const Heading = styled.h2`
  text-align: ${({ theme }) => theme.alignItemCenter};
`;

export const InnerContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  width: ${({ theme }) => theme.widthFull};
  margin: 0 auto;
  margin-top: 104px;
  padding: ${({ theme }) => `0 ${theme.pageSidePadding}`};
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ theme }) => theme.alignItemCenter};

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    padding: ${({ theme }) => `0 ${theme.pageSidePaddingTablet}`};
  }

  @media (max-width: ${(props) => props.theme.widthMobile}) {
    margin-top: 40px;
    padding: ${({ theme }) => `0 ${theme.pageSidePaddingMobile}`};
  }
`;

export const Subheading = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.primaryBlueDark};
  text-align: ${({ theme }) => theme.alignItemCenter};
`;

export const BottomContainer = styled.div`
  position: ${({ theme }) => theme.positionRelative};
`;
