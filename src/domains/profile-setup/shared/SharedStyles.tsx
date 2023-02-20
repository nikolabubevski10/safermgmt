import styled from 'styled-components';

export const MainActionButton = styled.div<{
  isDisabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.secondaryBlueDark};

  width: 258px;
  height: 60px;
  background: linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    #fdd119;
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};

  box-shadow: 0px 10px 20px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};

  :hover {
    background: ${({ theme }) => theme.secondaryYellowLight};
  }

  ${({ isDisabled, theme }) =>
    isDisabled &&
    `
    color: ${theme.secondaryGrayMedium};
    cursor: not-allowed;
  `}
`;

export const Input = styled.input<{
  isValid: boolean;
}>`
  z-index: 1;
  width: 280px;
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.secondaryGrayMedium};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  padding: ${({ theme }) => theme.inputPadding};
  outline: none;
  :focus {
    border: 1px solid
      ${({ theme, isValid }) =>
        isValid ? theme.secondaryGrayDark : theme.secondaryRed};
  }
  ${({ isValid, theme }) =>
    !isValid &&
    `
    border: 1px solid ${theme.secondaryRed};
  `}

  @media only screen and (min-width: ${({ theme }) =>
    theme.sizeRanges.tablet.min}px) {
    width: 326px;
  }
`;
