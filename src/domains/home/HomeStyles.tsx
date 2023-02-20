import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: ${({ theme }) => theme.primaryWhite};

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktopLarge.min}px) {
  }
`;
