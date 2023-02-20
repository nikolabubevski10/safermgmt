import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.sizeRanges.desktop.min}px) {
    flex-direction: row;
  }
`;
