import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(12, 63, 98, 0.05);
  border: 1px solid rgba(35, 57, 72, 0.05);
  box-sizing: ${({ theme }) => theme.boxSizingBorderBox};
  height: 55px;
  width: 18.75rem;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
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
  font-size: 14px;
  line-height: 17px;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
`;
