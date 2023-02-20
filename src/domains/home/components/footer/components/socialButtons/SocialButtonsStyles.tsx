import styled from 'styled-components';

export const Svg = styled.svg<{
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  margin-right: 30px;

  fill: ${({ theme }) => theme.secondaryGrayDark};
  :hover {
    fill: ${({ theme }) => theme.secondaryBlack};
  }
  cursor: pointer;
`;
