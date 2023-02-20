import styled from 'styled-components';

export const Container = styled.div<{
  isOnTop: boolean;
}>`
  z-index: ${({ isOnTop }) => (isOnTop ? '3' : '1')};
  display: flex;
  flex-direction: column;
  padding-left: 4px;
`;
