import styled from 'styled-components';

export const Container = styled.div<{
  isSelected: boolean;
  isValid: boolean;
}>`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-left: 21px;
  padding-right: 21px;
  overflow: ${({ isSelected }) => (isSelected ? 'hidden' : 'visible')};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.primaryWhite : 'transparent'};
  border-radius: 30px;
  border: ${({ isSelected, theme, isValid }) =>
    isSelected
      ? isValid
        ? `1px solid ${theme.secondaryGrayDark}`
        : `1px solid ${theme.secondaryRed}`
      : 'none'};
  box-sizing: border-box;
  cursor: pointer;
`;

export const Inner = styled.div<{
  isFirst: boolean;
  isSelected: boolean;
}>`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 21px;
  padding-bottom: 21px;
  background-color: inherit;
  border-top: ${({ isFirst, isSelected, theme }) =>
    isFirst || isSelected ? 'none' : `1px solid ${theme.secondaryGrayMedium}`};
`;

export const TextInput = styled.input`
  font-family: ${({ theme }) => theme.font};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: 23px;
  margin-left: 15px;
  padding-right: 15px;
  outline: none;
  border: none;
  width: 100%;
  background-color: transparent;
  :focus: inherit;
`;

export const Overlay = styled.div<{
  isSelected: boolean;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99999;
  cursor: not-allowed;
  display: ${({ isSelected }) => (isSelected ? 'none' : 'block')};
`;
