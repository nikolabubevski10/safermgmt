import styled from 'styled-components';

export const Container = styled.div`
  min-width: 700px;
`;

export const TitleHeader = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
  align-items: ${({ theme }) => theme.alignItemCenter};
`;

export const DatePickerContainer = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  cursor: ${({ theme }) => theme.cursorPointer};
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: ${({ theme }) => theme.fontStyleNormal};
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 22px;
  line-height: 26px;
  margin-top: 12px;
  width: fit-content;

  svg {
    margin-left: 10px;
  }
`;
