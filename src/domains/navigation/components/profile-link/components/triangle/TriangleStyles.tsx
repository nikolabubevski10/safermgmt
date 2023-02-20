import styled from 'styled-components';

export const Container = styled.div``;

export const Svg = styled.svg<{
  up?: boolean;
  down?: boolean;
  left?: boolean;
  isActive?: boolean;
}>`
  cursor: pointer;
  width: 9px;
  height: 7px;
  fill: inherit;
  opacity: 0.5;
  margin-left: auto;

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
