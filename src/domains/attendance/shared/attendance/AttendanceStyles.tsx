import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  padding: ${({ theme }) => `0 ${theme.pageSidePadding}`};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    padding: ${({ theme }) => `0 ${theme.pageSidePaddingTablet}`};
  }

  @media (max-width: ${(props) => props.theme.widthMobile}) {
    padding: ${({ theme }) => `0 ${theme.pageSidePaddingMobile}`};
  }
`;

export const Heading = styled.h2`
  font-weight: ${({ theme }) => theme.weightFullBold};
  text-align: center;
  z-index: 2;
`;

export const InstructionsContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  z-index: 2;
`;

export const Instructions = styled.div`
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 1;
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.weightRegular};
  color: ${({ theme }) => theme.primaryBlueDark};
`;

export const NotificationContainer = styled.div`
  margin-top: 25px;
  height: 38px;
  z-index: 2;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 30px;
  }
`;

export const MostRecentPerson = styled.div`
  margin-top: ${({ theme }) => theme.fontSizeXXL};
  font-size: 1;
  line-height: ${({ theme }) => theme.lineHeightMedium};
  font-family: ${({ theme }) => theme.fontNormal};
  font-weight: ${({ theme }) => theme.weightMedium};
  color: ${({ theme }) => theme.primaryBlueDark};
  text-align: center;
`;

export const SubHeaderContainer = styled.div`
  margin-top: 20px;
`;
