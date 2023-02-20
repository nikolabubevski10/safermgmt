import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  cursor: ${({ theme }) => theme.cursorPointer};
`;
