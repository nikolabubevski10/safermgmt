import styled from 'styled-components';

export const StyledSvg = styled.svg`
  position: absolute;
  top: 164px;
  left: ${({ theme }) => theme.homepageLeftMarginTablet};
  fill: ${({ theme }) => theme.secondaryBlueLight};
`;
