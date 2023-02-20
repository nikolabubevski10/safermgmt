import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    max-width: 300px;
    min-width: 300px;
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

export const Label = styled.div`
  color: ${({ theme }) => theme.secondaryGrayDark};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: 1;
  margin-bottom: 10px;
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
