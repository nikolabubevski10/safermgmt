import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.secondaryFontDark};
  height: ${({ theme }) => theme.inputIconSize};
  width: ${({ theme }) => theme.inputIconSize};

  &:hover {
    fill: ${({ theme }) => theme.secondaryBlack};
  }
`;
