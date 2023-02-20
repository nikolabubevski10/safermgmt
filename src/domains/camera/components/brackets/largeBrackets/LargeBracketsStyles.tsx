import styled from 'styled-components';

export const Svg = styled.svg`
  position: absolute;
  width: 50%;
  height: 50%;
  max-width: 300px;
  max-height: 300px;
  fill: ${({ theme }) => theme.primaryWhite};
  opacity: 0.5;
  z-index: 5;
`;
