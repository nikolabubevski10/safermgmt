import styled from 'styled-components';

interface IContainer {
  shouldShow: boolean;
}

interface IModal {
  isMessageSent: boolean;
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

export const Modal = styled.div<IModal>`
  padding: 35px 40px 50px 40px;
  background-color: ${({ theme }) => theme.primaryWhite};
  width: 730px;
  min-height: 610px;
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

    display: ${({ isMessageSent }) => isMessageSent && 'flex'};
    justify-content: ${({ isMessageSent }) => isMessageSent && 'center'};
    align-items: ${({ isMessageSent }) => isMessageSent && 'center'};
  }
`;

export const Subheading = styled.div`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weightMedium};
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.primaryBlueDark};

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
    margin-top: 15px;
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

export const ColumnContainer = styled.div`
  display: flex;
  padding-top: 35px;

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
    flex-direction: column;
    padding-top: 30px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 15px;

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
    margin-right: 0;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-bottom: 20px;
  }
`;

export const NotificationContainer = styled.div`
  margin-top: 35px;

  @media (max-width: ${(props) => props.theme.widthTablet}) {
    margin-top: 30px;
  }
`;

export const SuccessContainer = styled.div`
  @media (max-width: ${(props) => props.theme.widthTablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) => theme.widthTablet}) {
    margin-top: 40px;
    justify-content: flex-start;
  }
`;
