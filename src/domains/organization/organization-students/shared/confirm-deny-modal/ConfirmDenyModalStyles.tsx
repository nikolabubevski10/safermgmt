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
  width: 430px;
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

export const MainActionButton = styled.div<{
  isDisabled?: boolean;
}>`
  :hover {
    background: ${({ theme }) => theme.secondaryYellowLight};
  }
  ${({ isDisabled, theme }) =>
    isDisabled && ` color: ${theme.secondaryGrayMedium};  cursor: not-allowed;`}
  align-items: center;
  background-blend-mode: overlay, normal;
  background: linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    ${({ theme }) => theme.primaryYellow};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  box-shadow: 0px 10px 20px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};
  color: ${({ theme }) => theme.secondaryBlueDark};
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightBold};
  height: 40px;
  justify-content: center;
  line-height: 1;
  margin-left: auto;
  width: 80px;
  z-index: 1;
`;

export const LightActionButton = styled.div`
  :hover { 
    background: ${({ theme }) => theme.secondaryGrayMedium}; 
  }
  align-items: center;
  background-blend-mode: overlay, normal;
  background: ${({ theme }) => theme.primaryWhite}};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.secondaryGrayDark}80;
  color: ${({ theme }) => theme.secondaryBlueDark};
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightBold};
  height: 40px;
  justify-content: center;
  line-height: 1;
  width: 80px;
  z-index: 1;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

export const Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
