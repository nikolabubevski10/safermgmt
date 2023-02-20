import styled, { keyframes } from 'styled-components';

const size = 40;
const borderSize = size * 0.2;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryWhite};
  z-index: 1000;
`;

export const LoaderContainer = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Loader = styled.span`
  text-align: center;
  display: block;
`;

export const Circle = styled.div`
  animation: ${spin} 1.5s linear infinite;
  border: ${borderSize}px solid ${(props) => props.theme.secondaryGrayLight};
  border-radius: 50%;
  border-top: ${borderSize}px solid ${(props) => props.theme.primaryBlueDark};
  box-sizing: border-box;
  height: ${size}px;
  margin: auto;
  width: ${size}px;
`;
