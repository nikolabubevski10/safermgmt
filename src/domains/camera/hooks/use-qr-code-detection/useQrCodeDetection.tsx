import { LegacyRef, RefObject, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import detectQrCode from './utils/detectQrCode';

type CanvasRef = HTMLCanvasElement | null;
type WebcamRef = Webcam | null;

interface IUseQrCodeDetectionProps {
  canvasRef: RefObject<CanvasRef>;
  isCameraOn: boolean;
  onQrCodeScan: (value: string) => void;
  shouldDrawBoxForQr: boolean;
  shouldScanQrCodes: boolean;
  webcamRef: LegacyRef<WebcamRef>;
}
const useQrCodeDetection = ({
  canvasRef,
  isCameraOn,
  onQrCodeScan,
  shouldDrawBoxForQr,
  shouldScanQrCodes,
  webcamRef,
}: IUseQrCodeDetectionProps): void => {
  const [qrCodeValue, setQrCodeValue] = useState<string | null>(null);
  const [shouldScan, setShouldScan] = useState(shouldScanQrCodes);

  useEffect(() => {
    setShouldScan(shouldScanQrCodes);
  }, [shouldScanQrCodes]);

  useEffect(() => {
    if (!webcamRef || !isCameraOn || !canvasRef || !shouldScan) {
      return;
    }

    const qrCodeDetectInterval = window.setInterval(() => {
      detectQrCode({
        canvasRef: canvasRef as RefObject<HTMLCanvasElement>,
        webcamRef: webcamRef as RefObject<Webcam>,
        canvasContext: canvasRef.current?.getContext('2d'),
        setQrCodeValue,
        qrCodeValue,
        shouldDrawBoxForQr,
        onQrCodeScan,
      });
    }, 300);

    return () => {
      window.clearInterval(qrCodeDetectInterval);
    };
  }, [
    shouldScan,
    canvasRef,
    webcamRef,
    isCameraOn,
    qrCodeValue,
    shouldDrawBoxForQr,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('reset');
      setQrCodeValue('');
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [qrCodeValue]);
};

export default useQrCodeDetection;
