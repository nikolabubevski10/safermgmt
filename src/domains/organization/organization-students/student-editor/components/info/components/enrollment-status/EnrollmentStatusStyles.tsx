import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    margin-top: 0px;
    margin-left: 25px;
    :first-child {
      margin-left: 0px;
    }
  }

  margin-left: 0px;
  margin-top: 25px;
  :first-child {
    margin-top: 0px;
  }

  min-width: 220px;
  max-width: auto;
`;

export const InputLabelText = styled.div`
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: 1;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  cursor: pointer;
  width: 100%;
  height: 100%;

  input {
    height: 0;
    width: 0;
    opacity: 0;
    cursor: pointer;
    position: absolute;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const StatusText = styled.div`
  color: ${({ theme }) => theme.secondaryBlack};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: 1;
  margin-left: 10px;
  user-select: none;
`;

export const Checkbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  height: 0;
  width: 0;
  position: relative;
`;

export const Overlay = styled.div<{
  isDisabled: boolean;
}>`
  display: ${({ isDisabled }) => (isDisabled ? 'block' : 'none')};
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
`;
