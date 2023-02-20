import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: ${({ theme }) => theme.flexColumn};
  padding: 18px 0;
`;

export const MainLinkContainer = styled.div<{
  isActive?: boolean;
}>`
  align-items: ${({ theme }) => theme.alignItemCenter};
  color: ${({ theme }) => theme.secondaryGrayDark};
  cursor: ${({ theme }) => theme.cursorPointer};
  display: ${({ theme }) => theme.displayTypeFlex};
  fill: ${({ theme }) => theme.secondaryGrayDark};
  font-weight: ${({ theme }) => theme.weightMedium};
  position: ${({ theme }) => theme.positionRelative};
  width: ${({ theme }) => theme.widthFull};
  :hover {
    fill: ${({ theme }) => theme.secondaryBlack};
    color: ${({ theme }) => theme.secondaryBlack};
  }
  ${({ isActive, theme }) =>
    isActive &&
    `
        fill: ${theme.secondaryBlack};
        color: ${theme.secondaryBlack}; 
        font-weight: ${theme.weightSemibold};
    `}
`;

export const Button = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  height: ${({ theme }) => theme.heightFull};
  outline: none;
  position: ${({ theme }) => theme.positionAbsolute};
  width: ${({ theme }) => theme.widthFull};
  z-index: 10;
`;

export const Label = styled.div`
  color: inherit;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: inherit;
  line-height: 19px;
  margin-left: 15px;
  margin-right: 6px;
  width: 275px;
  z-index: 5;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  max-width: 86%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`;

export const SubLinkContainer = styled.div<{
  isOpen: boolean;
  height: number;
}>`
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: ${({ theme }) => theme.flexColumn};
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  height: ${({ isOpen }) => (isOpen ? null : '0')};
  margin-top: 23px;
  background: ${({ theme }) => theme.primaryWhite};
  box-shadow: 5px 5px 15px rgb(0 0 0 / 10%);
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  z-index: 999;
  overflow: ${({ theme }) => theme.autoStyles};
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChildContainer = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: ${({ theme }) => theme.fontStyleNormal};

  color: ${({ theme }) => theme.secondaryGrayDark};
  font-weight: ${({ theme }) => theme.weightRegular};
  position: ${({ theme }) => theme.positionRelative};

  h5 {
    padding: 10px 0px;
    margin: 0px 20px;
    font-weight: ${({ theme }) => theme.weightBoldX};
    font-size: ${({ theme }) => theme.fontSizeLarge};
    line-height: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.lightOpacityGray};
    color: ${({ theme }) => theme.primaryBlueDark};
  }
  :not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.lightOpacityGray};
  }
  div {
    margin: 0px 20px;
    padding: 15px 0px;
    :not(:last-child) {
      border-bottom: 2px solid ${({ theme }) => theme.lightOpacityGray};
    }
  }
  div span {
    font-family: ${({ theme }) => theme.fontNormal};
    font-style: ${({ theme }) => theme.fontStyleNormal};
    display: ${({ theme }) => theme.displayTypeFlex};
    align-items: ${({ theme }) => theme.alignItemCenter};
    justify-content: ${({ theme }) => theme.contentSpaceBetween};
    font-weight: ${({ theme }) => theme.weightMedium};
    margin-right: 5px;
    font-size: 13px;
    line-height: 15px;
    color: ${({ theme }) => theme.secondaryFontDark};
  }
`;
