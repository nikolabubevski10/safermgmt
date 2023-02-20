import styled from 'styled-components';

interface IPath {
  isSorted: boolean;
}

interface ISvg {
  isSortedDesc: boolean;
}

export const Path = styled.path<IPath>`
  fill: ${({ isSorted, theme }) =>
    isSorted ? theme.secondaryFontDark : theme.secondaryFontDarkTrans};
`;

export const Svg = styled.svg<ISvg>`
  transform: ${({ isSortedDesc }) =>
    isSortedDesc ? `rotate(0deg)` : `rotate(180deg)`};
`;
