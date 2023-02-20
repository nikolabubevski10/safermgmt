import styled from 'styled-components';
import bg from './assets/bg.png';

const bgWidth = '192px';

export const Container = styled.div<{
  isOnTop: boolean;
}>`
  height: 208px;
  overflow: visible;
  width: ${bgWidth};
  z-index: ${({ isOnTop }) => (isOnTop ? '4' : '1')};
`;

export const BigText = styled.div`
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.fontBold};
  font-size: 35px;
  line-height: 35px;
  z-index: 1;
`;

export const SmallText = styled.div`
  color: ${({ theme }) => theme.primaryWhite};
  font-family: ${({ theme }) => theme.fontBold};
  font-size: 12px;
  line-height: 12px;
  z-index: 1;
`;

export const Background = styled.div<{
  bottomClip?: number;
  transitionDurationInSec: number;
}>`
  align-items: center;
  background-image: url(${bg});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  height: 442px;
  overflow: hidden;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: ${bgWidth};
  z-index: 0;

  ${BigText} {
    margin-bottom: 6px;
    margin-top: 8px;
  }

  transition: clip-path
    ${({ transitionDurationInSec }) => `${transitionDurationInSec}s`}
    ease-in-out;
  clip-path: inset(0 0 0 0 round ${({ theme }) => theme.borderRadiusXXXL});
  ${({ bottomClip, theme }) =>
    bottomClip &&
    `
      clip-path: inset(0 0 ${bottomClip}px 0 round ${theme.borderRadiusXXXL});
    `}
`;

export const Border = styled.div`
  background-color: ${({ theme }) => theme.secondaryGrayMedium};
  height: 1px;
  margin-bottom: 13px;
  margin-top: 16px;
  width: 152px;
  z-index: 1;
`;
