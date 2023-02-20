import styled from 'styled-components';
export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontBold};
  width: 328px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.slightGrey};
  box-sizing: ${({ theme }) => theme.boxSizingBorderBox};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  align-items: ${({ theme }) => theme.alignItemCenter};
  padding: 15px 20px;
  opacity: 0.5;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: ${({ theme }) => theme.cursorPointer};
  &.active {
    border: none;
    box-shadow: 0px 10px 20px 0px
      ${({ theme }) => theme.secondaryBlackTransLight};
    opacity: 1;
  }
`;
export const Lable = styled.div`
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.primaryBlueLight};
`;
