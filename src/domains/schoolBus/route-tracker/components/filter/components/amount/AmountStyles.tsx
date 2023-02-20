import { FilterType } from 'domains/schoolBus/route-tracker/types';
import styled from 'styled-components';
import ExclamationImg from './assets/exclamation.svg';

interface IContainer {
  type: FilterType;
}

export const Container = styled.div<IContainer>`
  padding: 16px 29px 16px 16px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme, type }) => {
    switch (type) {
      case FilterType.Negative:
        return theme.secondaryRed;
      case FilterType.Nutral:
        return theme.primaryBlueLight;
      case FilterType.Positive:
        return theme.secondaryGreenDark;
    }
  }};
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

export const IcoExclamation = styled.div`
  width: 26px;
  height: 26px;
  background: url(${ExclamationImg});
  margin-right: 10px;
`;
