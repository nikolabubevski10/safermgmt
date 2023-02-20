import styled from 'styled-components';
import filterNeutralBackground from './assets/filterNeutralBackground.png';

export const Label = styled.label`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  user-select: none;
`;

export const NeutralContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  ${Label} {
    color: ${({ theme }) => theme.primaryWhite};
    font-size: ${({ theme }) => theme.fontSizeExtraLarge};
    font-weight: ${({ theme }) => theme.weightBold};
  }
`;

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  border: 10px solid ${({ theme }) => theme.primaryWhite};
  box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.secondaryBlackTransLight};
  flex: 1;
  max-height: 86px;
  max-width: 1060px;
  min-height: 86px;
  overflow: hidden;
  position: relative;

  margin-left: 0px;
  margin-top: 15px;
  :first-child {
    margin-top: 0px;
  }

  @media (min-width: ${(props) => props.theme.sizeRanges.desktop.min}px) {
    margin-top: 0px;
    margin-left: 10px;
    margin-right: 10px;
    :first-child {
      margin-left: 0px;
    }
    :last-child {
      margin-right: 0px;
    }
  }
`;

export const NeutralBackground = styled.img.attrs(() => ({
  src: filterNeutralBackground,
}))`
  position: absolute;
  max-width: 1061px;
  min-width: 1061px;
  height: 100%;
`;

export const AmountContainer = styled.div`
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.primaryWhite};
  padding: 16px 29px 16px 16px;
  font-size: ${({ theme }) => theme.fontSizeXXXL};
  font-weight: ${({ theme }) => theme.weightHeavy};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;
