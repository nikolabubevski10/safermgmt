import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Loader = styled.span`
  text-align: center;
  display: block;
`;

export const Circle = styled.div.attrs(({ size }: { size: number }) => ({
  borderSize: size * 0.2,
}))<{
  size: number;
  borderSize: number;
}>`
  animation: ${spin} 1.5s linear infinite;
  border: ${({ borderSize }) => borderSize}px solid
    ${(props) => props.theme.secondaryGrayLight};
  border-radius: 50%;
  border-top: ${({ borderSize }) => borderSize}px solid
    ${(props) => props.theme.primaryBlueDark};
  box-sizing: border-box;
  height: ${({ size }) => size}px;
  margin: auto;
  width: ${({ size }) => size}px;
`;
