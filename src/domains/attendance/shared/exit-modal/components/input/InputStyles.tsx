import styled from 'styled-components';

interface IInput {
  error?: string;
  hasIcon: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  font-weight: ${({ theme }) => theme.weightSemibold};
  color: ${({ theme }) => theme.secondaryGrayDark};
  @media (max-width: ${(props) => props.theme.widthTablet}) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  right: ${({ theme }) => theme.inputPadding};
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Input = styled.input<IInput>`
  width: 100%;
  border: ${({ theme, error }) =>
    `1px solid ${error ? theme.secondaryRed : theme.secondaryGrayMedium}`};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.secondaryFontDark};
  padding: ${({ theme }) => theme.inputPadding};
  padding-right: ${({ theme, hasIcon }) =>
    hasIcon && `calc(${theme.inputPadding} * 2 + ${theme.inputIconSize})`};
  outline: none;
  &:hover {
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.secondaryRed : theme.secondaryGrayDark};
  }
  &:focus {
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.secondaryRed : theme.secondaryGrayDark};
    background-color: ${({ theme }) => theme.primaryWhite};
  }
  &::placeholder {
    color: ${({ theme }) => theme.secondaryFontDarkTrans};
  }
  @media (max-width: ${(props) => props.theme.widthTablet}) {
    font-size: 15px;
    line-height: 17px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const InnerTopContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const ErrorMessage = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.secondaryRed};
  @media (max-width: ${(props) => props.theme.widthTablet}) {
    font-size: 14px;
    line-height: 16px;
  }
`;
