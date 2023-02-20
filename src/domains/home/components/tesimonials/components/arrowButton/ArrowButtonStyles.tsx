import styled from 'styled-components';

export const Path = styled.path`
  stroke: ${({ theme }) => theme.secondaryYellowMedium};
`;

export const Svg = styled.svg`
  width: 32px;
  height: 32px;
  cursor: pointer;
  fill-opacity: 0.01;

  :hover {
    fill-opacity: 1;
    ${Path} {
      stroke: ${({ theme }) => theme.secondaryBlack};
    }
  }
`;

export const Circle = styled.circle`
  fill: ${({ theme }) => theme.primaryYellow};
  stroke: ${({ theme }) => theme.primaryYellow};
`;
