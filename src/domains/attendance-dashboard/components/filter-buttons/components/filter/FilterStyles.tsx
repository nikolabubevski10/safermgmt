import styled from 'styled-components';

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
