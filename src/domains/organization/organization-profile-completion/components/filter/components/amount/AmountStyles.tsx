import styled from 'styled-components';

interface IContainer {
  type: 'negative' | 'neutral' | 'positive';
}

export const Container = styled.div<IContainer>`
  padding: 16px 29px 16px 16px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme, type }) =>
    (type === 'negative' && theme.secondaryRed) ||
    (type === 'neutral' && theme.primaryBlueLight) ||
    (type === 'positive' && theme.secondaryGreenDark)};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  color: ${({ theme }) => theme.primaryWhite};
  cursor: pointer;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSizeXXXL};
  font-weight: ${({ theme }) => theme.weightHeavy};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;
