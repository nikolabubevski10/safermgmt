import styled from 'styled-components';

interface IInput {
  error?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  font-weight: ${({ theme }) => theme.weightSemibold};
  color: ${({ theme }) => theme.secondaryGrayDark};
`;

export const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Input = styled.input<IInput>`
  width: 100%;
  border: ${({ theme, error }) =>
    `1px solid ${error ? theme.secondaryRed : theme.secondaryGrayMedium}`};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  color: ${({ theme }) => theme.secondaryFontDark};
  padding: ${({ theme }) => theme.inputPadding};
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
`;

export const TextArea = styled.textarea`
  font-family: ${({ theme }) => theme.fontNormal};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightRegular};
  height: 100%;
  line-height: ${({ theme }) => theme.lineHeightSmall};
  min-height: 138px;
  resize: none;

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
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  color: ${({ theme }) => theme.secondaryRed};

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    font-size: 15px;
  }
`;
