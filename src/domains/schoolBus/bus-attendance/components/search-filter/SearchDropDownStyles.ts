import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 25px;
`;

export const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.secondaryBlack};
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  border: 1px solid ${({ theme }) => theme.secondaryGrayMedium};
  background-color: ${({ theme }) => theme.primaryWhite};
  outline: none;
  width: 328px;
  z-index: 5;
  padding-left: 2.5rem;
`;

export const ResultsContainer = styled.div`
  position: absolute;
  padding: 16px;
  background-color: ${({ theme }) => theme.primaryWhite};
  width: 328px;
  z-index: 4;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  box-shadow: 0px 5px 20px ${({ theme }) => theme.secondaryGrayMedium};
  margin-top: 10px;
`;

export const InputContainer = styled.div`
  position: relative;
`;
