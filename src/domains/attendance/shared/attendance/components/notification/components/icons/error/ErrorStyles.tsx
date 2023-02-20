import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.secondaryRed};
  height: ${({ theme }) => theme.notificationIconSize};
  width: ${({ theme }) => theme.notificationIconSize};
`;
