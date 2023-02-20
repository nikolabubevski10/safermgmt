import styled from 'styled-components';

export const Svg = styled.svg`
  z-index: 0;
  position: absolute;
  fill: ${({ theme }) => theme.secondaryBlueLight};
  height: 816px;
  display: none;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    display: block;
    right: 25px;
    top: 30px;
  }
`;
