import styled from 'styled-components';

export const Container = styled.div<{
  displayNone: boolean;
}>`
  align-items: center;
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  display: ${({ displayNone }) => (displayNone ? 'none' : 'flex')};
  flex-direction: column;
  margin-bottom: 50px;
  max-width: 552px;
  padding: 10px;
  z-index: 2;
`;

export const QuestionText = styled.p`
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;

export const Subtext = styled.p`
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ExplanationInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  appearance: none;
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  border: 1px solid ${({ theme }) => theme.secondaryGrayMedium};
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 20px;
  max-width: 350px;
  outline: none;
  padding: 15px;
  width: 100%;
`;
