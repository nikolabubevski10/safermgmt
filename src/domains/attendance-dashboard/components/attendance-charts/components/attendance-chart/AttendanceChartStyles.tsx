import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  box-sizing; border-box;
  display: flex;
  justify-content: center;
  margin-right: 0px;
  margin-top: 30px;
  min-height: 400px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.sizeRanges.desktop.min}px) {
    width: 66.666%;
    margin-right: 30px;
    margin-top: 0px;
  }
`;

export const Inner = styled.div<{
  width: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: ${({ width }) => (width ? `${width}px` : '0px')};
  min-width: 0px;
  width: 100%;
`;
