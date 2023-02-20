import styled from 'styled-components';

interface IContainer {
  shouldShow: boolean;
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
  min-width: 430px;
  min-height: 210px;
  max-height: 95vh;
  border-radius: 30px;
  overflow-y: auto;
  z-index: 100;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

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
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  h3 {
    color: ${({ theme }) => theme.primaryBlueDark};
  }
`;

export const Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
