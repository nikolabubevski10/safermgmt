import styled from 'styled-components';

export const Card = styled.div`
  min-height: 300px;
  border-radius: ${({ theme }) => theme.borderRadiusXXXL};
  background-color: ${({ theme }) => theme.primaryWhite};
  box-shadow: 0px 0px 30px ${({ theme }) => theme.secondaryGrayMedium};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  margin-left: 0px;
  margin-top: 20px;
  :first-child {
    margin-top: 0px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.sizeRanges.desktop.min}px) {
    flex: 1;
    margin-top: 0px;
    margin-left: 20px;
    :first-child {
      margin-left: 0px;
    }
  }
`;

export const CardTopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0px;
  padding: 20px 20px 0px 20px;
  align-items: center;
`;

export const MainActionButton = styled.div<{
  shouldShow?: boolean;
  wide?: boolean;
  isActive?: boolean;
}>`
  display: ${({ shouldShow = true }) => (shouldShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: ${({ isActive = true }) => (isActive ? 'pointer' : 'not-allowed')};
  margin-left: auto;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme, isActive = true }) =>
    isActive ? theme.secondaryBlueDark : theme.secondaryGrayDark};

  width: ${({ wide }) => (wide ? '200px' : '150px')};
  height: 40px;
  background: linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    #fdd119;
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};

  box-shadow: 0px 10px 20px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};

  :hover {
    background: ${({ theme }) => theme.secondaryYellowLight};
  }
`;
