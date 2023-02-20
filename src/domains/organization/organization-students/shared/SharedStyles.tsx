import styled from 'styled-components';

export const MainActionButton = styled.div<{
  isDisabled?: boolean;
}>`
  :hover {
    background: ${({ theme }) => theme.secondaryYellowLight};
  }
  ${({ isDisabled, theme }) =>
    isDisabled && ` color: ${theme.secondaryGrayMedium};  cursor: not-allowed;`}
  align-items: center;
  background-blend-mode: overlay, normal;
  background: linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    ${({ theme }) => theme.primaryYellow};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  box-shadow: 0px 10px 20px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};
  color: ${({ theme }) => theme.secondaryBlueDark};
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightBold};
  height: 52px;
  justify-content: center;
  line-height: 1;
  margin-left: auto;
  width: 192px;
  z-index: 1;
`;
