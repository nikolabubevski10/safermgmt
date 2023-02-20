import { RefObject } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import drawImage from './drawImage';
import getFrame from './getFrame';
import clearCanvas from './clearCanvas';
import drawBox from './drawBox';

const detectQrCode = async ({
  canvasContext,
  canvasRef,
  setQrCodeValue,
  onQrCodeScan,
  qrCodeValue,
  shouldDrawBoxForQr,
  webcamRef,
}: {
  canvasContext: CanvasRenderingContext2D | null | undefined;
  canvasRef: RefObject<HTMLCanvasElement>;
  setQrCodeValue: (s: string) => void;
  onQrCodeScan: (value: string) => void;
  qrCodeValue: string | null;
  shouldDrawBoxForQr: boolean;
  webcamRef: RefObject<Webcam>;
}): Promise<void> => {
  if (!canvasContext || !canvasRef || !webcamRef) return;

  drawImage({
    canvasContext,
    webcamRef,
  });

  const frame = getFrame({
    canvasContext,
    canvasRef,
  });

  if (!frame) {
    return;
  }

  clearCanvas({
    canvasContext,
    canvasRef,
  });

  const detectedQrCode = jsQR(frame.data, frame.width, frame.height);

  if (!detectedQrCode) {
    return;
  }

  const isNewQrCode = detectedQrCode.data !== qrCodeValue;

  if (isNewQrCode) {
    setQrCodeValue(detectedQrCode.data);
    onQrCodeScan(detectedQrCode.data);
  }

  if (shouldDrawBoxForQr) {
    drawBox({
      canvasRef,
      canvasContext,
      detectedQrCodeData: detectedQrCode,
    });
  }
};

export default detectQrCode;
