import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const MenuButton = styled.button<{
  isActive: boolean;
}>`
    :hover {color: ${({ theme }) =>
      theme.primaryBlueDark}; box-shadow: 0px 0px 30px 0px ${({ theme }) =>
  theme.secondaryGrayMedium}80; 
    }
    :last-child { margin-right: 0px; }
    ${({ isActive, theme }) =>
      isActive &&
      `  color: ${theme.primaryBlueDark};  
    box-shadow: 0px 0px 30px 0px  ${theme.secondaryGrayMedium}80`};
    align-items: center;
    appearance: none;
    background-blend-mode: overlay, normal;
    background: ${({ theme }) => theme.primaryWhite}};
    border-radius: ${({ theme }) => theme.borderRadiusXXL};
    border: none;
    color: ${({ theme }) => theme.primaryBlueLight};
    cursor: pointer;
    display: flex;
    font-family: ${({ theme }) => theme.fontBold};
    font-size: ${({ theme }) => theme.fontSizeXL};
    font-style: normal;
    font-weight: ${({ theme }) => theme.weightBoldX};
    height: 62px;
    justify-content: center;
    line-height: 1;
    margin-right: 20px;
    min-height: 62px;
    min-width: 182px;
    outline: none;
    width: 182px;
    z-index: 1;
  `;
