import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  :first-child {
    margin-top: 0px;
  }
`;

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Bar = styled.div<{
  red?: boolean;
  green?: boolean;
  percent: number;
  shouldShow: boolean;
}>`
  :first-child {
    margin-top: 0px;
  }
  align-items: center;
  background-color: ${({ theme, red, green }) => {
    if (red) return theme.secondaryRed;
    if (green) return theme.secondaryGreenDark;
    return theme.secondaryGrayMedium;
  }};
  border-bottom-right-radius: 999px;
  border-top-right-radius: 999px;
  color: ${({ theme }) => theme.primaryWhite};
  display: flex;
  font-family: ${({ theme }) => theme.fontBold};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-weight: ${({ theme }) => theme.weightBoldX};
  height: 16px;
  justify-content: flex-end;
  margin-top: 2px;
  padding-right: 10px;
  text-align: right;
  transition: width 0.4s ease-in-out;
  width: ${({ percent, shouldShow }) => {
    if (!shouldShow) return '0%';
    return percent ? `${percent * 100}%` : `10px`;
  }};
`;

export const Label = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-weight: ${({ theme }) => theme.weightBold};
  width: 30px;
`;
