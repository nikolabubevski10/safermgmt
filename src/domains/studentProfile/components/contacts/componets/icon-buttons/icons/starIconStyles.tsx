import styled from 'styled-components';

export const Svg = styled.svg<{
  isActive: boolean;
}>`
  fill: ${({ theme, isActive }) =>
    isActive ? theme.secondaryYellowMedium : theme.secondaryFontDark};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};

  :hover {
    opacity: 1;
  }
`;
