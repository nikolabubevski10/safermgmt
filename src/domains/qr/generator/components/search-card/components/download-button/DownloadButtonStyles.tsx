import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${({ theme }) => theme.secondaryGrayMedium};
`;

export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountText = styled.div`
  color: ${({ theme }) => theme.secondaryBlack};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-family: ${({ theme }) => theme.font};
  line-height: ${({ theme }) => theme.lineHeightMedium};
`;
