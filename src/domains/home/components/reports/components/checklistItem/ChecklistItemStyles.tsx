import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 88px;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  align-items: center;
  padding: 13px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.primaryWhite};

  box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.secondaryGrayMedium};

  h4 {
    font-size: 17px;
    line-height: 20px;
    @media only screen and (min-width: ${({ theme }) =>
        theme.sizeRanges.mobileLarge.min}px) {
      font-size: 23px;
      line-height: 26px;
    }
  }
`;

export const Svg = styled.svg`
  height: 68px;
  min-width: 68px;
  margin-right: 20px;
  fill: ${({ theme }) => theme.secondaryGreenDark};
`;
