import styled from 'styled-components';

export const BoldSubText = styled.div`
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;

export const SubText = styled.div`
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
`;

export const Inner = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.secondaryGrayMedium};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  overflow: hidden;

  ${SubText} {
    margin-top: 10px;
  }

  ${BoldSubText} {
    margin-top: 10px;
  }
`;
