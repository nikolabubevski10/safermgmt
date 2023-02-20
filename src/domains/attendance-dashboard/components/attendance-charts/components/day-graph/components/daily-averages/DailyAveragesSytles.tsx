import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 7px;
  margin-bottom: 15px;
`;

export const AverageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const Label = styled.div`
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-weight: ${({ theme }) => theme.weightBold};
  line-height: 1;
`;

export const Dot = styled.div<{
  red?: boolean;
  green?: boolean;
}>`
  background-color: ${({ theme, red, green }) => {
    if (red) return theme.secondaryRed;
    if (green) return theme.secondaryGreenDark;
    return theme.secondaryGrayMedium;
  }};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-right: 10px;
`;
