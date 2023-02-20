import React, { LegacyRef, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Webcam from 'react-webcam';

import useFaceDetection from './hooks/useFaceDetection';
import useQrCodeDetection from './hooks/use-qr-code-detection/useQrCodeDetection';
import useDimensions from './hooks/useDimensions';

import LargeBrackets from './components/brackets/largeBrackets/LargeBrackets';
import SmallBrackets from './components/brackets/smallBrackets/SmallBrackets';

import { Canvas, Container, Text, WebcamContainer } from './CameraStyles';

type WebcamRef = Webcam;

interface CameraProps {
  handleUserMedia: () => void;
  isCameraOn: boolean;
  isLoading: boolean;
  isSuccessful?: boolean;
  onClick: () => void;
  onFaceScan?: (value: string) => void;
  onQrCodeScan?: (value: string) => void;
  photo: string | null;
  showDisabledText?: boolean;
  shouldDrawBoxForFace?: boolean;
  shouldDrawBoxForQr?: boolean;
  shouldScanFaces?: boolean;
  shouldScanQrCodes?: boolean;
  shouldShowStatus?: boolean;
  webcamRef: LegacyRef<WebcamRef>;
}

const turnOnText = `click to turn on camera`;

const Camera: React.FC<CameraProps> = ({
  handleUserMedia,
  isCameraOn,
  isLoading,
  isSuccessful = false,
  onClick,
  onFaceScan = () => undefined,
  onQrCodeScan = () => undefined,
  photo,
  showDisabledText = true,
  shouldDrawBoxForFace = false,
  shouldDrawBoxForQr = false,
  shouldScanFaces = false,
  shouldScanQrCodes = false,
  shouldShowStatus = false,
  webcamRef,
}: CameraProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { ref, dimensions } = useDimensions();

  useFaceDetection({
    canvasRef,
    isCameraOn,
    onFaceScan,
    shouldDrawBoxForFace,
    shouldScanFaces,
    webcamRef,
  });
  useQrCodeDetection({
    canvasRef,
    isCameraOn,
    onQrCodeScan,
    shouldDrawBoxForQr,
    shouldScanQrCodes,
    webcamRef,
  });

  const { t } = useTranslation();

  const videoConstraints = {
    facingMode: 'user',
    width: dimensions.width,
    height: dimensions.height,
    aspectRatio: 1,
  };

  const handleUserMediaError = (error: string | DOMException) => {
    console.error(error);
    const alertText = t('There was a problem accessing your camera');
    alert(alertText);
  };

  const tTurnOnText = t(turnOnText);

  const showSmallBrackets =
    !photo && isCameraOn && !isLoading && !shouldShowStatus;
  const showLargeBrackets = isLoading && !shouldShowStatus;
  const showText = showDisabledText && !photo && !isCameraOn;

  return (
    <Container
      isCameraOn={isCameraOn}
      isSuccessful={isSuccessful}
      shouldShowStatus={shouldShowStatus}
      onClick={onClick}
      ref={ref}
    >
      {showText && <Text>{tTurnOnText}</Text>}
      {showSmallBrackets && <SmallBrackets />}
      {showLargeBrackets && <LargeBrackets />}

      {!photo && isCameraOn && (
        <>
          <Canvas
            height={dimensions.height}
            width={dimensions.width}
            ref={canvasRef}
          />

          <WebcamContainer>
            <Webcam
              id="webcam"
              ref={webcamRef}
              audio={false}
              videoConstraints={videoConstraints}
              mirrored={true}
              screenshotFormat="image/jpeg"
              screenshotQuality={1}
              onUserMedia={handleUserMedia}
              onUserMediaError={handleUserMediaError}
            />
          </WebcamContainer>
        </>
      )}
      {photo && <img src={photo} />}
    </Container>
  );
};

export default Camera;
