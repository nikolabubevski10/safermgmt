import styled from 'styled-components';

export const Svg = styled.svg`
  z-index: 3;
  fill: ${({ theme }) => theme.primaryWhite};
  width: 30px;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.borderRadiusXL};
`;
