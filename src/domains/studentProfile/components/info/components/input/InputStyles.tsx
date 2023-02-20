import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    max-width: 300px;
    margin-top: 0px;
    margin-left: 25px;
    :first-child {
      margin-left: 0px;
    }
  }
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  margin-left: 0px;
  margin-top: 25px;
  :first-child {
    margin-top: 0px;
  }
  max-width: auto;
  min-width: 150px;
`;

export const TextInput = styled.input<{
  isValid: boolean;
  isHighlighted: boolean;
  isDisabled?: boolean;
}>`
  background-color: ${({ theme, isDisabled = false }) =>
    isDisabled ? theme.primaryWhite : theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusXL};
  border: 1px solid
    ${({ theme, isValid, isHighlighted }) => {
      if (isHighlighted) return theme.primaryBlueLight;
      if (!isValid) return theme.secondaryRed;
      return theme.secondaryGrayMedium;
    }};
  color: ${({ theme }) => theme.secondaryBlack};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: 1;
  outline: none;
  padding: 15px;
  width: 100%;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: 1;
  margin-bottom: 10px;
`;

export const Overlay = styled.div<{
  isDisabled: boolean;
}>`
  display: ${({ isDisabled }) => (isDisabled ? 'block' : 'none')};
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
`;
