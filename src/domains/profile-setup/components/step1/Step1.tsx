import React, { useState, Fragment } from 'react';
import Webcam from 'react-webcam';
import { useTranslation } from 'react-i18next';
import {
  Container,
  CameraContainer,
  RetakeButton,
  DisabledText,
  DisabledSubtext,
  DisabledOverlayContainer,
} from './Step1Styles';
import Camera from '../../../../domains/camera/Camera';
import DisabledCamera from './components/disabledCamera/DisabledCamera';
import { MainActionButton } from '../../shared/SharedStyles';

const allowText = 'Allow Camera';
const disabledSubtext = `Press 'Allow Camera' to continue`;
const disabledText = 'Camera disabled';
const instructionsText = `Use your phone camera to 
take a photo. Please center your face.`;
const retakeText = 'Retake photo';
const takeText = 'Take photo';
const uploadText = 'Upload photo';

export interface Props {
  isCameraOn: boolean;
  webcamRef: React.MutableRefObject<Webcam | null>;
  turnOnCamera: () => void;
  photo: string | null;
  isLoading: boolean;
  takePhoto: () => void;
  retakePhoto: () => void;
  goToNextStep: () => void;
}

const Step1: React.FC<Props> = ({
  goToNextStep,
  isCameraOn,
  isLoading,
  photo,
  retakePhoto,
  takePhoto,
  turnOnCamera,
  webcamRef,
}: Props) => {
  const [isCameraAllowed, setIsCameraAllowed] = useState<boolean>(false);
  const { t } = useTranslation();
  const tAllowText = t(allowText);
  const tDisabledSubtext = t(disabledSubtext);
  const tDisabledText = t(disabledText);
  const tInstructionText = t(instructionsText);
  const tRetakeText = t(retakeText);
  const tTakeText = t(takeText);
  const tUploadText = t(uploadText);

  const handleAllowCamera = () => {
    turnOnCamera();
    setIsCameraAllowed(true);
  };

  const handleRetakePhoto = () => {
    retakePhoto();
  };

  const handleTakePhoto = () => {
    takePhoto();
  };

  const handleUploadPhoto = () => {
    goToNextStep();
  };

  return (
    <Container>
      <p>{tInstructionText}</p>
      <CameraContainer onClick={handleAllowCamera}>
        {!isCameraAllowed && (
          <DisabledOverlayContainer>
            <DisabledCamera />
            <DisabledText>{tDisabledText}</DisabledText>
            <DisabledSubtext>{tDisabledSubtext}</DisabledSubtext>
          </DisabledOverlayContainer>
        )}
        <Camera
          handleUserMedia={handleAllowCamera}
          isCameraOn={isCameraOn}
          isLoading={isLoading}
          onClick={handleAllowCamera}
          photo={photo}
          showDisabledText={false}
          webcamRef={webcamRef}
        />
      </CameraContainer>
      {!isCameraAllowed && (
        <MainActionButton onClick={handleAllowCamera}>
          {tAllowText}
        </MainActionButton>
      )}
      {isCameraAllowed && !photo && (
        <MainActionButton onClick={handleTakePhoto}>
          {tTakeText}
        </MainActionButton>
      )}
      {isCameraAllowed && !!photo && (
        <Fragment>
          <MainActionButton onClick={handleUploadPhoto}>
            {tUploadText}
          </MainActionButton>
          <RetakeButton onClick={handleRetakePhoto}>{tRetakeText}</RetakeButton>
        </Fragment>
      )}
    </Container>
  );
};

export default Step1;
