import styled from 'styled-components';

const loaderSize = 100;
const checkHeight = loaderSize / 2;
const checkWidth = loaderSize / 4;
const checkThickness = 5;
const circleThickness = 5;
const checkLeft = loaderSize / 6 + loaderSize / 12;

export const Container = styled.div`
  margin: 20px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const TakePhotoButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  background-color: ${({ theme }) => theme.primaryBlueLight};
  color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusMedium};
  transform: translateY(-50%);
  z-index: 2;
`;

export const TurnOnCameraButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  background-color: ${({ theme }) => theme.secondaryGrayDark};
  color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.borderRadiusMedium};
  transform: translateY(-50%);
  z-index: 2;
`;

export const Checkmark = styled.div`
  z-index: 3;
  position: absolute;
  width: 100px;
  height: 100px;
`;

export const CircleLoader = styled.div<{
  loadComplete?: boolean;
  checkmark?: boolean;
}>`
  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes checkmark {
    0% {
      height: 0px;
      width: 0px;
      opacity: 1;
    }
    20% {
      height: 0;
      width: ${checkWidth}px;
      opacity: 1;
    }
    40% {
      height: ${checkHeight}px;
      width: ${checkWidth}px;
      opacity: 1;
    }
    100% {
      height: ${checkHeight}px;
      width: ${checkWidth}px;
      opacity: 1;
    }
  }
  border: ${circleThickness}px solid rgba(0, 0, 0, 0.2);
  border-left-color: ${({ theme }) => theme.secondaryGreenDark};
  animation: loader-spin 1.2s infinite linear;
  position: absolute;
  display: inline-block;
  vertical-align: top;
  border-radius: 50%;
  width: ${loaderSize}px;
  height: ${loaderSize}px;

  ${Checkmark} {
    ${({ checkmark, theme }) =>
      checkmark &&
      `
          :after {
              animation-duration: 800ms;
              animation-timing-function: ease;
              animation-name: checkmark;
              transform: scaleX(-1) rotate(135deg);
              opacity: 1;
              height: ${checkHeight}px;
              width: ${checkWidth}px;
              transform-origin: left top;
              border-right: ${checkThickness}px solid ${theme.secondaryGreenDark};
              border-top: ${checkThickness}px solid ${theme.secondaryGreenDark};
              content: '';
              left: ${checkLeft}px;
              top: ${checkHeight}px;
              position: absolute;
          }
      `}
  }

  ${({ loadComplete, theme }) =>
    loadComplete &&
    `
        -webkit-animation: none;
        animation: none;
        border-color: ${theme.secondaryGreenDark};
        transition: border 500ms ease-out;
    `}
`;
