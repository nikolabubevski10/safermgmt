import styled from 'styled-components';

export const Svg = styled.svg`
  position: relative;
  left: -9px;
  top: 10px;
  fill: ${({ theme }) => theme.secondaryBlueLight};
`;

export const Container = styled.div`
  width: 30.4vw;
  height: 0px;
  overflow: visible;
  z-index: 0;
`;
