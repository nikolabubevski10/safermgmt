import styled from 'styled-components';

export const Container = styled.div<{
  isFirst: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  ${({ isFirst }) =>
    isFirst &&
    `
        flex-grow: 0;
    `}
`;

export const Connector = styled.div<{
  isChecked: boolean;
  isCurrentStep: boolean;
}>`
  background-color: ${({ theme, isChecked, isCurrentStep }) =>
    isChecked || isCurrentStep
      ? theme.primaryBlueLight
      : theme.secondaryGrayMedium};
  height: 2px;
  flex: 1;
`;

export const CheckSvg = styled.svg<{
  canClick: boolean;
  hasBeenReachedBefore: boolean;
}>`
  cursor: ${({ canClick }) => (canClick ? 'pointer' : 'not-allowed')};
  height: 26px;
  width: 26px;
  fill: ${({ theme, hasBeenReachedBefore }) =>
    hasBeenReachedBefore ? theme.secondaryGrayMedium : theme.primaryBlueLight};
`;

export const Unchecked = styled.div<{
  isCurrentStep: boolean;
  canClick: boolean;
}>`
  box-sizing: border-box;
  cursor: ${({ canClick }) => (canClick ? 'pointer' : 'not-allowed')};
  height: 26px;
  width: 26px;
  border: 2px solid
    ${({ theme, isCurrentStep }) =>
      isCurrentStep ? theme.primaryBlueLight : theme.secondaryGrayMedium};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
  border-radius: 99999px;
`;
