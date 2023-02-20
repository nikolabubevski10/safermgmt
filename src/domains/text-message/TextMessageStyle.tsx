import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  background: ${({ theme }) => theme.secondaryGrayLight};
  border: 1px solid ${({ theme }) => theme.secondaryGrayDark};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  height: 50px;
  margin-top: 20px;
  line-height: ${({ theme }) => theme.lineHeightMedium};
  outline: none;
  padding: 10px;
  width: 250px;
  color: ${({ theme }) => theme.primaryBlueLight};
  cursor: text;
  font-size: ${({ theme }) => theme.fontSizeLarge};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  &:focus {
    background: ${({ theme }) => theme.primaryWhite};
    border: 1px solid ${({ theme }) => theme.primaryBlueLight};
  }
`;

export const Button = styled.div`
  ${({ theme }) => `
    background-color: ${theme.primaryWhite};
    color: ${theme.primaryBlueDark};
    font-size: ${theme.fontSizeMedium};
    border-radius: ${theme.borderRadiusSmall};
    padding: 10px;
    margin: 0px 0px 0px 0px;
    width: 180px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none; 

    :active {
        background-color: ${theme.primaryBlueDark};
        color: ${theme.primaryWhite};
    }
`}
`;

export const Message = styled.div<{
  isError: boolean;
}>`
  display: flex;
  align-items: center;
  width: 220px;
  height: 25px;
  color: ${({ theme, isError }) =>
    isError ? theme.secondaryRed : theme.primaryBlueDark};
  padding: 3px;
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
`;
