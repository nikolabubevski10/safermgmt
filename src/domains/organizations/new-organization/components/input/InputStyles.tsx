import styled from 'styled-components';

export const Container = styled.div<{
  removeleftMargin: boolean;
}>`
    display: flex
    flex-direction: column;
    margin: 22px;
    margin-left: ${({ removeleftMargin }) =>
      removeleftMargin ? '0px' : '22px'};
`;

export const TextInput = styled.input<{
  isValid: boolean;
  isHighlighted: boolean;
  longWidth: boolean;
  widthIs: number | unknown;
}>`
  width: ${({ longWidth, widthIs }) =>
    widthIs ? `${widthIs}px` : longWidth ? '650px' : '300px'};
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondaryFontDark};
  font-weight: ${({ theme }) => theme.weightRegular};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 19px;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadiusXL};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border: 1px solid
    ${({ theme, isValid, isHighlighted }) => {
      if (isHighlighted) return theme.primaryBlueLight;
      if (!isValid) return theme.secondaryRed;
      return theme.secondaryGrayMedium;
    }};
  outline: none;
`;

export const Label = styled.div`
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-weight: ${({ theme }) => theme.weightSemibold};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: 16px;
  margin-bottom: 10px;
`;
