import styled from 'styled-components';

export const Container = styled.div`
  cursor: ${({ theme }) => theme.cursorPointer};
`;

export const Svg = styled.svg`
  height: 25px;
  width: 14px;
  stroke: ${({ theme }) => theme.primaryBlueDark};
  margin-right: 25px;
`;
