import React, { useEffect } from 'react';

import useCamera from '../../../../../camera/hooks/useCamera';
import Camera from '../../../../../camera/Camera';
import { Container } from './AttendanceCameraStyles';

interface Props {
  isScanInProgress: boolean;
  isSuccessful: boolean;
  onFaceScan?: (value: string) => void;
  onQrCodeScan?: (value: string) => void;
  shouldScanFaces?: boolean;
  shouldScanQrCodes?: boolean;
  shouldShowStatus: boolean;
}

const AttendanceCamera: React.FC<Props> = ({
  isScanInProgress,
  isSuccessful,
  onFaceScan,
  onQrCodeScan,
  shouldScanFaces = false,
  shouldScanQrCodes = false,
  shouldShowStatus,
}: Props) => {
  const {
    isCameraOn,
    isLoading,
    photo,
    setIsLoading,
    turnOnCamera,
    webcamRef,
  } = useCamera();

  useEffect(() => {
    setIsLoading(isScanInProgress);
  }, [isScanInProgress]);

  const handleFaceScan = (value: string) => onFaceScan && onFaceScan(value);
  const handleQrCodeScan = (value: string) =>
    onQrCodeScan && onQrCodeScan(value);

  return (
    <Container>
      <Camera
        handleUserMedia={turnOnCamera}
        isCameraOn={isCameraOn}
        isLoading={isLoading}
        isSuccessful={isSuccessful}
        onClick={turnOnCamera}
        onFaceScan={handleFaceScan}
        onQrCodeScan={handleQrCodeScan}
        photo={photo}
        shouldDrawBoxForFace={false}
        shouldDrawBoxForQr={false}
        shouldScanFaces={shouldScanFaces}
        shouldScanQrCodes={shouldScanQrCodes}
        shouldShowStatus={shouldShowStatus}
        webcamRef={webcamRef}
      />
    </Container>
  );
};

export default AttendanceCamera;
