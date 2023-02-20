import styled from 'styled-components';

export const Svg = styled.svg`
  z-index: -3;
  position: absolute;
  width: 149px;
  height: 149px;
  fill: ${({ theme }) => theme.secondaryBlueLight};
  left: ${({ theme }) => theme.homepageLeftMarginTablet};
  top: 474px;
`;
