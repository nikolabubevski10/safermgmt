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
  z-index: 10;

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
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
  padding: 35px 40px 35px 40px;
  background-color: ${({ theme }) => theme.primaryWhite};
  width: 585px;
  min-height: 441px;
  max-height: 629px;
  border-radius: 30px;
  overflow-y: auto;
  z-index: 10;

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
    padding: 30px;
    min-width: 100vw;
    min-height: 100vh;
    border-radius: 0;
  }
`;
