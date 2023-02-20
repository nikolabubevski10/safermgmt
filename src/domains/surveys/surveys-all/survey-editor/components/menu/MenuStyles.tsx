import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const MenuButton = styled.button<{
  isActive: boolean;
}>`
    appearance: none;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    cursor: pointer;
    margin-right: 20px;
    :last-child {
      margin-right: 0px;
    }
  
    width: 182px;
    height: 62px;
    min-width: 182px;
    min-height: 62px;
    background: ${({ theme }) => theme.primaryWhite}};
    background-blend-mode: overlay, normal;
    border-radius: ${({ theme }) => theme.borderRadiusXXL};
  
    font-family: ${({ theme }) => theme.fontBold};
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    color: ${({ theme }) => theme.primaryBlueLight};
  
    :hover {
      color: ${({ theme }) => theme.primaryBlueDark};
      box-shadow: 0px 0px 30px 0px
      ${({ theme }) => theme.secondaryGrayMedium}80;
    }
  
    ${({ isActive, theme }) =>
      isActive &&
      `
      color: ${theme.primaryBlueDark};
      box-shadow: 0px 0px 30px 0px
      ${theme.secondaryGrayMedium}80;
    `}
  `;
