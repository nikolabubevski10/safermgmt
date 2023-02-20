import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 85px;
`;

export const InnerContainer = styled.div`
  display: flex;
  margin-top: 15px;
  :last-child {
    margin-top: 30px;
  }
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.weightBold};
  color: ${({ theme }) => theme.secondaryFontDark};
`;

export const BottomText = styled.div`
  margin-top: 35px;
  font-family: ${({ theme }) => theme.font};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.weightMedium};
  color: ${({ theme }) => theme.secondaryGrayDark};
`;
