import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2px;
  margin-left: 5px;
`;

export const Path = styled.path<{
  light?: boolean;
  dark?: boolean;
}>`
  fill: ${({ light, dark, theme }) => {
    if (light && !dark) {
      return theme.secondaryYellowMedium;
    } else if (dark && !light) {
      return theme.secondaryBlueDark;
    } else {
      return 'blue';
    }
  }};
`;
