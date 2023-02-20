import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  margin-top: 25px;
`;

export const MenuButton = styled.button<{
  isActive: boolean;
}>`
    appearance: none;
    outline: none;
    border: none;
    display: ${({ theme }) => theme.displayTypeFlex};
    justify-content: ${({ theme }) => theme.alignItemCenter};
    align-items: ${({ theme }) => theme.alignItemCenter};
    z-index: 1;
    cursor: ${({ theme }) => theme.cursorPointer};
    margin-right: 20px;
    :last-child {
      margin-right: 0px;
    }
    padding: 0 30px;
    height: 62px;
    min-width: 115px;
    min-height: 62px;
    background: ${({ theme }) => theme.primaryWhite}};
    background-blend-mode: overlay, normal;
    border-radius: ${({ theme }) => theme.borderRadiusXXL};
  
    font-family: ${({ theme }) => theme.fontBold};
    font-style: ${({ theme }) => theme.fontStyleNormal};
    font-weight: ${({ theme }) => theme.weightBoldX};
    font-size: 20px;
    line-height: 20px;
    color: ${({ theme }) => theme.primaryBlueLight};
    opacity: .5;
    :hover {
      opacity: 1;
      color: ${({ theme }) => theme.primaryBlueLight};
      box-shadow: 0px 0px 30px 0px
      ${({ theme }) => theme.secondaryGrayMedium};
    }
  
    ${({ isActive, theme }) =>
      isActive &&
      `
      color: ${theme.primaryBlueLight};
      opacity: 1;
      box-shadow: 0px 0px 30px 0px
      ${theme.secondaryGrayMedium};
    `}
  `;
