import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input.attrs(() => ({
  type: 'text',
}))<{
  hasText: boolean;
}>`
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusXL};
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
  display: ${({ shouldShow }) => (shouldShow ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 10px;
  max-height: 300px;
  overflow: scroll;
  padding: 16px;
  position: absolute;
  width: 100%;
  z-index: 4;
`;

export const InputContainer = styled.div`
  position: relative;
`;
