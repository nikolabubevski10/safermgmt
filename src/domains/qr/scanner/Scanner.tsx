import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import useCamera from '../../camera/hooks/useCamera';
import Camera from '../../camera/Camera';
import { Container, TopContainer, Inner } from './ScannerStyles';

const Scanner: React.FC = () => {
  const { photo, isCameraOn, turnOnCamera, webcamRef, isLoading } = useCamera();

  const [value, setValue] = useState('-');
  const [shouldShowStatus, setShouldShowStatus] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  const handleQrScan = (data: string) => {
    if (data) {
      setValue(data);
      setShouldShowStatus(true);
      setIsSuccessful(true);
    }
  };

  useEffect(() => {
    if (shouldShowStatus) {
      const timer = setTimeout(() => {
        setShouldShowStatus(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [shouldShowStatus]);

  const { t } = useTranslation();
  const headingText = t('QR Code Scanner');
  const descriptionText = t('Scan your QR code');
  const valueLabel = t('Value');

  return (
    <Container>
      <TopContainer>
        <h1>{headingText}</h1>
      </TopContainer>
      <Inner>
        <h2>{descriptionText}</h2>

        <h3>
          {valueLabel}: {value}
        </h3>

        <Camera
          isLoading={isLoading}
          photo={photo}
          isCameraOn={isCameraOn}
          isSuccessful={isSuccessful}
          webcamRef={webcamRef}
          onClick={turnOnCamera}
          onQrCodeScan={(value: string) => handleQrScan(value)}
          handleUserMedia={turnOnCamera}
          shouldScanQrCodes
          shouldShowStatus={shouldShowStatus}
        />
      </Inner>
    </Container>
  );
};

export default Scanner;
