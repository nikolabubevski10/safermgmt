import styled from 'styled-components';
import { TypeEnum } from '../../types';

export const Container = styled.div<{
  type: keyof typeof TypeEnum;
}>`
  align-items: center;
  background: ${({ theme, type }) => {
    if (type === TypeEnum.negative) return theme.secondaryRed;
    if (type === TypeEnum.positive) return theme.secondaryGreenDark;
    return theme.primaryWhite;
  }};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  color: ${({ theme }) => theme.primaryWhite};
  cursor: pointer;
  display: flex;
  padding: 16px 29px 16px 16px;
  width: 100%;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSizeXXXL};
  font-weight: ${({ theme }) => theme.weightHeavy};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;
