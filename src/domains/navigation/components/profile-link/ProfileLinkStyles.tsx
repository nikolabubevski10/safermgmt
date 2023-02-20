import styled from 'styled-components';

export const TopInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const BottomInner = styled.div<{
  isOpen: boolean;
}>`
  overflow: hidden;
  min-height: 0px;
  max-height: 0px;
  ${({ isOpen }) =>
    isOpen &&
    `
    min-height: 106px;
    height: 106px;
  `}
  transition: height 0.3s ease-in-out, min-height 0.3s ease-in-out;
  width: 100%;
  flex: 1;
  padding-left: 59px;
`;

export const Container = styled.div<{
  isOpen: boolean;
}>`
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryGrayMedium};
  border-radius: ${({ theme }) => theme.borderRadiusXXXL};
  color: ${({ theme }) => theme.secondaryGrayDark};
  display: flex;
  fill: ${({ theme }) => theme.secondaryGrayDark};
  flex-direction: column;
  min-height: 49px;
  justify-content: center;
  margin-top: 30px;
  padding: ${({ isOpen }) =>
    isOpen ? '5px 17px 3px 3px' : '3px 17px 3px 3px'};
  transition: padding 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.secondaryBlack};
    fill: ${({ theme }) => theme.secondaryBlack};
  }
`;

export const FakeAvatar = styled.div`
  border-radius: 99999px;
  height: 44px;
  width: 44px;
  background-color: ${({ theme }) => theme.secondaryBlueLight};
  opacity: 1;
  border: 2px solid white;
`;

export const Label = styled.div`
  cursor: pointer;
  z-index: 5;
  font-family: ${({ theme }) => theme.font};
  font-size: 16px;
  line-height: 16px;
  font-weight: inherit;
  margin-left: 15px;
  margin-right: 30px;
  color: inherit;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryGrayDark};
`;

export const ProfileLinkText = styled.div`
  cursor: pointer;
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 14px;
  font-weight: ${({ theme }) => theme.weightSemibold};
  color: ${({ theme }) => theme.secondaryGrayDark};
  :hover {
    color: ${({ theme }) => theme.secondaryBlack};
  }
  margin-bottom: 15px;
`;

export const LogoutText = styled.div`
  cursor: pointer;
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 14px;
  font-weight: ${({ theme }) => theme.weightSemibold};
  color: ${({ theme }) => theme.secondaryRed};
`;

export const ExitIconContainer = styled.div`
  margin-top: 16px;
  display: flex;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
