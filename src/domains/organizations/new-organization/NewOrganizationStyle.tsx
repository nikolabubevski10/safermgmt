import styled from 'styled-components';

export const Container = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  min-height: 52px;
`;

export const StyledLink = styled.div`
  margin-left: auto;
  text-decoration: none;
`;

export const MainActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: ${({ theme }) => theme.cursorPointer};

  font-family: ${({ theme }) => theme.font};
  font-style: ${({ theme }) => theme.fontStyleNormal};
  font-weight: ${({ theme }) => theme.weightBold};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.secondaryBlueDark};
  width: 192px;
  height: 52px;
  min-width: 192px;
  min-height: 52px;
  background: linear-gradient(
      224.33deg,
      rgba(0, 0, 0, 0.2) 5.75%,
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    ${({ theme }) => theme.primaryYellow};
  background-blend-mode: overlay, normal;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};

  box-shadow: 0px 10px 20px 0px
    ${({ theme }) => theme.secondaryYellowLightTrans};

  :hover {
    background: ${({ theme }) => theme.secondaryYellowLight};
  }
`;

export const OrganizationsTabs = styled.div`
  width: 100%;
  height: 600px;
  overflow: scroll;
`;
