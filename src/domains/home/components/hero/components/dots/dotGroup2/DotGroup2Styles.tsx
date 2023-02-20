import styled from 'styled-components';

export const StyledSvg = styled.svg`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.tabletLarge.min}px) {
    position: absolute;
    top: 20px;
    right: calc(50vw - 380px);
    fill: ${({ theme }) => theme.secondaryBlueLight};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    position: absolute;
    top: 20px;
    right: calc(50vw - 415px);
  }
`;
