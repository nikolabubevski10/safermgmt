import styled from 'styled-components';

export const Path1 = styled.path`
  fill: ${({ theme }) => theme.secondaryRed};
`;

export const Svg = styled.svg`
  height: ${({ theme }) => theme.filterIconSize};
  width: ${({ theme }) => theme.filterIconSize};
`;
