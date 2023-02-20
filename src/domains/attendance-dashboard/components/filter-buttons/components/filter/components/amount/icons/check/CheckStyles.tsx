import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.primaryWhite};
  height: ${({ theme }) => theme.filterIconSize};
  width: ${({ theme }) => theme.filterIconSize};
`;
