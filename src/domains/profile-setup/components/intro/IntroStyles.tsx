import styled from 'styled-components';

export const Container = styled.div`
  z-index: 3;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 40px;
    line-height: 50px;
    font-weight: ${({ theme }) => theme.weightFullBold};
    color: ${({ theme }) => theme.primaryBlueDark};
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: ${({ theme }) => theme.secondaryGrayDark};
    margin-bottom: 50px;
  }
`;

export const Subheading = styled.div`
  font-size: 25px;
  line-height: 36px;
  color: ${({ theme }) => theme.primaryBlueDark};
  text-align: center;
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.weightMedium};
`;
