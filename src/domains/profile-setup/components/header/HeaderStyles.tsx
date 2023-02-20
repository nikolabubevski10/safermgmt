import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 30px;

  h1 {
    margin-top: 20px;
    font-size: 30px;
    line-height: 30px;
    color: ${({ theme }) => theme.primaryBlueLight};
    background-color: ${({ theme }) => theme.primaryWhite};
    border-radius: ${({ theme }) => theme.borderRadiusLarge};
    padding: 5px;
    text-align: center;
  }
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
