import styled from 'styled-components';

export const Container = styled.div`
    display: flex
    flex-direction: column;
    margin-bottom: 25px;
    :last-child {
        margin-bottom: 0px;
    }
`;

export const TextInput = styled.input<{
  isValid: boolean;
  isHighlighted: boolean;
}>`
  width: 300px;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondaryBlack};
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
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
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 10px;
`;
