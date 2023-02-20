import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.primaryBlueDark};
  height: ${({ theme }) => theme.contactModalCloseButtonSize};
  width: ${({ theme }) => theme.contactModalCloseButtonSize};
  cursor: pointer;
  position: relative;
  top: -5px;
  left: 5px;
`;
