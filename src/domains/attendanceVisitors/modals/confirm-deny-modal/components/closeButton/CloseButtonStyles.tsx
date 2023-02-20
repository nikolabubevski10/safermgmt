import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.primaryBlueDark};
  height: ${({ theme }) => theme.contactModalCloseButtonSize};
  width: ${({ theme }) => theme.contactModalCloseButtonSize};
  cursor: ${({ theme }) => theme.cursorPointer};
  position: ${({ theme }) => theme.positionRelative};
  top: -5px;
  left: 5px;
`;
