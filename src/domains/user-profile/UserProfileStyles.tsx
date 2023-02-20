import styled from 'styled-components';
import Ellipse from './assets/icons/elipse.png';
import Dots from './assets/icons/dots.svg';

export const Container = styled.div`
  height: ${({ theme }) => theme.heightFull};
  position: ${({ theme }) => theme.positionRelative};
  min-width: 600px;
  :before {
    position: ${({ theme }) => theme.positionAbsolute};
    content: '';
    width: ${({ theme }) => theme.profileAreaCropAreaBefore.width};
    height: ${({ theme }) => theme.profileAreaCropAreaBefore.height};
    right: -52px;
    bottom: -50px;
    background: url(${Ellipse}) no-repeat;
  }

  :after {
    position: ${({ theme }) => theme.positionAbsolute};
    content: '';
    width: ${({ theme }) => theme.profileAreaCropAreaAfter.width};
    height: ${({ theme }) => theme.profileAreaCropAreaAfter.height};
    left: -41px;
    bottom: -50px;
    background: url(${Dots}) no-repeat;
  }
`;

export const HeadTitle = styled.div`
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
  justify-content: ${({ theme }) => theme.contentSpaceBetween};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizeBigH2};
`;

export const PageContent = styled.div``;
export const ProfileContainer = styled.div`
  margin-top: ${({ theme }) => theme.fontSizeExtraLarge};
  display: ${({ theme }) => theme.displayTypeFlex};
  align-items: ${({ theme }) => theme.alignItemCenter};
`;
export const ImageContainer = styled.div`
  img:first-child {
    width: ${({ theme }) => theme.modalUserProfileSize.width};
    height: ${({ theme }) => theme.modalUserProfileSize.height};
    border-radius: ${({ theme }) => theme.borderRadiusHalf};
    border: 3px solid ${({ theme }) => theme.primaryWhite};
    box-sizing: ${({ theme }) => theme.boxSizingBorderBox};
    filter: drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.1));
  }
`;
export const UserInfo = styled.div`
  margin-left: 20px;
`;
export const UserName = styled.h4``;
export const OrgName = styled.span`
  font-weight: ${({ theme }) => theme.weightSemibold};
  font-size: ${({ theme }) => theme.fontSizeXXL};
  line-height: ${({ theme }) => theme.profileOrdNameLineHeight};
  color: ${({ theme }) => theme.primaryBlueDark};
`;
export const BottomTextContainer = styled.div`
  cursor: ${({ theme }) => theme.cursorPointer};
`;
export const BottomText = styled.span`
  color: ${({ theme }) => theme.secondaryYellowMedium};
  margin-left: 5px;
  font-weight: ${({ theme }) => theme.weightBold};
  font-size: ${({ theme }) => theme.fontSizeExtraLarge};
`;
