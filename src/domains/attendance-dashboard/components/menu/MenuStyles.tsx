import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.sizeRanges.desktop.min}px) {
    flex-direction: row;
  }
`;

export const MenuButton = styled.button<{
  isActive: boolean;
}>`

    :hover {
      opacity: 1; 
      color: ${({ theme }) => theme.primaryBlueLight}; 
    }

    :last-child {
      margin-right: 0px;
    }

    align-items: ${({ theme }) => theme.alignItemCenter};
    appearance: none;
    background-blend-mode: overlay, normal;
    background: ${({ theme }) => theme.primaryWhite};
    border-radius: ${({ theme }) => theme.borderRadiusXXL};
    border: none;
    box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.secondaryGrayDark}80};
    color: ${({ theme }) => theme.primaryBlueLight};
    cursor: ${({ theme }) => theme.cursorPointer};
    display: ${({ theme }) => theme.displayTypeFlex};
    font-family: ${({ theme }) => theme.fontBold};
    font-size: 20px;
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightBoldX};
    height: 62px;
    justify-content: ${({ theme }) => theme.alignItemCenter};
    line-height: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    min-height: 62px;
    min-width: 182px;
    opacity: .5;
    outline: none;
    width: 100%;
    z-index: 1;

    @media (min-width: ${({ theme }) => theme.sizeRanges.desktop.min}px) {
      width: 182px;
      margin-bottom: 0px;
    }

    ${({ isActive, theme }) =>
      isActive &&
      `
      color: ${theme.primaryBlueLight};
      opacity: 1;
      box-shadow: 0px 0px 30px 0px ${theme.secondaryGrayDark}80;
  `}
`;
