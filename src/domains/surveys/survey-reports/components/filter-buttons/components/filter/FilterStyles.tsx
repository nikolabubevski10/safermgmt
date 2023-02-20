import styled from 'styled-components';
import filterNeutralBackground from './assets/filterNeutralBackground.png';

export const AmountContainer = styled.div`
  margin-right: 20px;
`;

export const Container = styled.div`
  align-items: center;
  background-blend-mode: overlay, normal;
  background: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.secondaryBlackTransLight};
  color: ${({ theme }) => theme.primaryBlueLight};
  cursor: pointer;
  display: flex;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-weight: ${({ theme }) => theme.weightBold};
  padding: 10px 25px 10px 10px;
  width: 100%;
  box-sizing: border-box;
  margin-left: 10px;
  margin-right: 10px;
  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-right: 0px;
  }
`;

export const Input = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  cursor: pointer;
  height: 15px;
  margin-left: auto;
  width: 15px;
`;

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
  ${AmountContainer} {
    margin-right: 0px;
  }
`;

export const NeutralBackgroundContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-right: 0px;
  }
  max-height: 86px;
  min-height: 86px;
  position: relative;
  overflow: hidden;
  max-width: 1060px;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  border: 10px solid ${({ theme }) => theme.primaryWhite};
  box-shadow: 0px 10px 20px 0px ${({ theme }) => theme.secondaryBlackTransLight};
`;
export const NeutralBackground = styled.img.attrs(() => ({
  src: filterNeutralBackground,
}))`
  position: absolute;
  max-width: 1061px;
  min-width: 1061px;
  height: 100%;
`;
