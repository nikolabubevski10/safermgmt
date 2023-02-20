import styled from 'styled-components';

interface IValue {
  isActive: boolean;
}

export const Container = styled.div`
  left: 5px;
  position: absolute;
  top: 55px;
`;

export const Option = styled.option``;

export const Overlay = styled.div`
  background: transparent;
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 9;
`;

export const Popup = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-width: 92px;
  padding: 8px 0;
  position: relative;
  z-index: 10;

  &:after {
    bottom: 100%;
    left: 70%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: ${({ theme }) => `${theme.primaryWhite}00`};
    border-bottom-color: ${({ theme }) => theme.primaryWhite};
    border-width: 6px;
    margin-left: -6px;
  }
`;

export const Select = styled.select``;

export const Value = styled.div<IValue>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.secondaryFontDark : theme.secondaryFontDarkTrans};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  padding: 7px 15px;
  text-align: left;
  width: 100%;
`;
