import styled from 'styled-components';

interface IContainer {
  shouldShow: boolean;
}

interface IStatus {
  isComplete: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100vw;
  height: 100vh;
  position: ${({ theme }) => theme.positionFixed};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${({ shouldShow, theme }) =>
    shouldShow ? theme.displayTypeFlex : 'none'};
  justify-content: ${({ theme }) => theme.alignItemCenter};
  align-items: ${({ theme }) => theme.alignItemCenter};
  overflow: hidden;
  z-index: 100;

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
    align-items: unset;
    max-width: ${({ theme }) => theme.widthFull};
    min-height: 100vh;
    border-radius: 0px;
  }
`;

export const Overlay = styled.div`
  width: ${({ theme }) => theme.widthFull};
  height: ${({ theme }) => theme.heightFull};
  position: ${({ theme }) => theme.positionAbsolute};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.secondaryBlackTrans};
  backdrop-filter: blur(8.15485px);
  cursor: ${({ theme }) => theme.cursorPointer};
`;

export const Modal = styled.div`
  padding: 35px 40px 35px 40px;
  background-color: ${({ theme }) => theme.primaryWhite};
  width: 557px;
  min-height: 456px;
  max-height: 95vh;
  border-radius: 30px;
  overflow-y: ${({ theme }) => theme.autoStyles};
  z-index: 100;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 30px 30px 150px 30px;
    min-width: 100vw;
    min-height: 100vh;
    max-height: none;
    border-radius: 0;
  }
`;

export const TopContainer = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  margin-bottom: 12px;
`;

export const InnerTopContainer = styled.div`
  flex: 1;
  display: ${({ theme }) => theme.displayTypeFlex};
  flex-direction: row;
  justify-content: flex-end;
`;

export const Content = styled.div``;

export const Status = styled.div`
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ theme }) => theme.fontSizeXXXL};
  font-weight: ${({ theme }) => theme.weightHeavy};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;

export const StatusContainer = styled.div<IStatus>`
  width: ${({ theme }) => theme.widthFull};
  margin: 25px 0 35px;
  padding: 16px;
  background-color: ${({ isComplete, theme }) =>
    isComplete ? theme.secondaryGreenDark : theme.secondaryRed};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
`;

export const StatusDate = styled.div`
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-weight: ${({ theme }) => theme.weightBold};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;

export const SubTitleContainer = styled.span`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: ${({ theme }) => theme.fontStyleNormal};
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: ${({ theme }) => theme.modalSubheadingFontSize};
  line-height: 36px;
  color: ${({ theme }) => theme.primaryBlueDark};
`;
export const SignatureContainer = styled.div`
  width: ${({ theme }) => theme.widthFull};
  height: 250px;
  background: ${({ theme }) => theme.slightGrayBackground};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  justify-content: ${({ theme }) => theme.alignItemCenter};
  margin-top: 40px;
`;
