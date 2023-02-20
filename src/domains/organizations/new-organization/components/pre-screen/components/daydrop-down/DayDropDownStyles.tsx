import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(12, 63, 98, 0.05);
  border: 1px solid rgba(35, 57, 72, 0.05);
  box-sizing: ${({ theme }) => theme.boxSizingBorderBox};
  height: 49px;
  width: 300px;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  display: flex;
  align-items: center;
`;

export const DropDownContainer = styled.div`
  cursor: ${({ theme }) => theme.cursorPointer};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  line-height: 17px;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
`;
export const DropItem = styled.span`
  cursor: ${({ theme }) => theme.cursorPointer};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  line-height: 17px;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
`;

export const Input = styled.input``;

export const DayName = styled.span``;

export const Label = styled.div`
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-weight: ${({ theme }) => theme.weightSemibold};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 16px;
  margin-bottom: 10px;
`;

export const Cover = styled.div`
  dispay: flex;
  align-items: center;
  flex-direction: column;
`;
