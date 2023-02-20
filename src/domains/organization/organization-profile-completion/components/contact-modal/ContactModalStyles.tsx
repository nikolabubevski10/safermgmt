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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${({ shouldShow }) => (shouldShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 100;

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
    align-items: unset;
    max-width: 100%;
    min-height: 100vh;
    border-radius: 0px;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.secondaryBlackTrans};
  backdrop-filter: blur(8.15485px);
  cursor: pointer;
`;

export const Modal = styled.div`
  padding: 35px 40px 50px 40px;
  background-color: ${({ theme }) => theme.primaryWhite};
  width: 640px;
  min-height: 584px;
  max-height: 95vh;
  border-radius: 30px;
  overflow-y: auto;
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
  display: flex;
`;

export const InnerTopContainer = styled.div`
  flex: 1;
  display: flex;
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
  width: 100%;
  margin: 25px 0 35px;
  padding: 16px;
  background-color: ${({ isComplete, theme }) =>
    isComplete ? theme.secondaryGreenDark : theme.secondaryRed};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusDate = styled.div`
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-weight: ${({ theme }) => theme.weightBold};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;
