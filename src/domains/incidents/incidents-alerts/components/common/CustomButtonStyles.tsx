import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    ${({ theme }) => theme.primaryYellow};
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  width: ${({ theme }) => theme.buttonWidthNormal};
  height: ${({ theme }) => theme.buttonHeightNormal};
  font-style: ${({ theme }) => theme.fontStyleNormal};
  font-weight: ${({ theme }) => theme.weightBold};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  line-height: ${({ theme }) => theme.lineHeight};
  text-align: ${({ theme }) => theme.alignItemCenter};
  color: ${({ theme }) => theme.secondaryBlueDark};
  margin: 0 auto;
  border: none;
  cursor: ${({ theme }) => theme.cursorPointer};
  transition: 0.3s all ease-in-out;

  :hover {
    background: ${({ theme }) => theme.secondaryYellowLight};
  }
`;
