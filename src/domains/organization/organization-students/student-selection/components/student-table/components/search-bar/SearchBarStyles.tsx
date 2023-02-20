import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-top: 25px;
  position: relative;
  width: 328px;
`;

export const Input = styled.input.attrs(() => ({
  type: 'text',
}))<{
  hasText: boolean;
}>`
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  border: 1px solid ${({ theme }) => theme.secondaryGrayMedium};
  color: ${({ theme }) => theme.secondaryBlack};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  outline: none;
  padding-bottom: 15px;
  padding-left: ${({ hasText }) => (hasText ? '15px' : '45px')};
  padding-right: ${({ hasText }) => (hasText ? '45px' : '15px')};
  padding-top: 15px;
  width: 100%;
  z-index: 5;
`;

export const ResultsContainer = styled.div<{
  shouldShow: boolean;
}>`
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  box-shadow: 0px 5px 20px ${({ theme }) => theme.secondaryGrayMedium};
  display: ${({ shouldShow }) => (shouldShow ? 'block' : 'none')};
  margin-top: 10px;
  padding: 16px;
  position: absolute;
  width: 100%;
  z-index: 4;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;
