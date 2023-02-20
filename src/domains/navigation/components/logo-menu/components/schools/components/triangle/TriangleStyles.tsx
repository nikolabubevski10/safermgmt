import styled from 'styled-components';

export const Svg = styled.svg<{
  up?: boolean;
  down?: boolean;
  left?: boolean;
  isActive?: boolean;
  color?: string;
}>`
  cursor: pointer;
  fill: ${({ theme, color }) => color || theme.primaryWhite};
  height: 7px;
  min-height: 7px;
  min-width: 9px;
  opacity: 0.5;
  position: relative;
  top: 5px;
  width: 9px;

  ${({ isActive }) =>
    isActive &&
    `
    opacity: 1;
  `}

  ${({ up, down, left }) => {
    if (up) return 'transform: rotate(0deg);';
    if (down) return 'transform: rotate(180deg);';
    if (left) return 'transform: rotate(270deg);';
    return 'transform: rotate(90deg);';
  }}}
`;
