import styled from 'styled-components';

const maxTextWidth = 504;

export const Container = styled.div`
  z-index: 3;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 30px;
`;

export const FailText = styled.div`
  background-color: ${({ theme }) => theme.secondaryRed};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weightBold};
  line-height: 19px;
  margin-top: 25px;
  max-width: ${maxTextWidth}px;
  padding: 25px;
  width: 100%;
`;

export const Span = styled.span`
  font-weight: ${({ theme }) => theme.weightBold};
`;

export const DisclaimerText = styled.div`
  margin-top: 25px;
  padding: 25px;
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  font: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.secondaryGrayDark};
  text-align: center;
  width: 100%;
  max-width: ${maxTextWidth}px;
`;
