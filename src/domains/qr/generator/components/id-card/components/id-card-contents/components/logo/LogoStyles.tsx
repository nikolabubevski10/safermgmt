import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  z-index: 11;
`;

export const Svg = styled.svg`
  height: 25px;
`;

export const LogoText = styled.div`
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.fontBold};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightBold};
  margin-left: 10px;
`;
