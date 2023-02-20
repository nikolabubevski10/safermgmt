import styled from 'styled-components';

interface IPhotoContainer {
  isCameraOn: boolean;
  isSuccessful?: boolean;
  shouldShowStatus?: boolean;
}

export const Container = styled.div<IPhotoContainer>`
  position: relative;
  width: 100%;
  height: 90vw;
  width: 90vw;
  max-width: 550px;
  max-height: 550px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.secondaryGrayLight};
  border: none;
  margin: 0px;
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  cursor: ${({ isCameraOn }) => (isCameraOn ? 'default' : 'pointer')};
  overflow: hidden;

  border: ${({ isSuccessful, shouldShowStatus, theme }) =>
    shouldShowStatus &&
    (isSuccessful
      ? `5px solid ${theme.secondaryGreenDark}`
      : `5px solid ${theme.secondaryRed}`)};
`;

export const WebcamContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vw;
  width: 90vw;
  max-width: 550px;
  max-height: 550px;

  overflow: hidden;

  #webcam {
    border-radius: inherit;
  }
`;

export const TakePhotoButton = styled.div`
  transform: translateY(-50%);
  z-index: 2;
`;

export const RetakePhotoButton = styled.div`
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const UploadPhotoButton = styled.div`
  margin-top: 30px;
`;

export const Text = styled.span`
  position: absolute;
  max-width: 66px;
  font-weight: ${(props) => props.theme.weightSemibold};
  font-size: 12px;
  line-height: 123.3%;
  color: ${({ theme }) => theme.secondaryGrayDark};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const Canvas = styled.canvas`
  z-index: 2;
  width: 90vw;
  height: 90vw;
  max-width: 550px;
  max-height: 550px;
`;
