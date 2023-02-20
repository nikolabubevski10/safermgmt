import styled from 'styled-components';

interface ICircle {
  isActive: boolean;
}

export const Circle = styled.circle<ICircle>`
  fill: ${({ isActive, theme }) =>
    isActive ? theme.secondaryFontDark : theme.secondaryFontDarkTrans};

  /* &:hover {
    fill: ${({ theme }) => theme.secondaryFontDark};
  } */
`;

export const Svg = styled.svg`
  cursor: pointer;
`;
