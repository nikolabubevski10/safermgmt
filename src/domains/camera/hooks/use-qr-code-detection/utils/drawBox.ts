import { RefObject } from 'react';
import { QRCode } from 'jsqr';

const drawBox = ({
  detectedQrCodeData,
  canvasContext,
  canvasRef,
}: {
  detectedQrCodeData: QRCode;
  canvasContext: CanvasRenderingContext2D;
  canvasRef: RefObject<HTMLCanvasElement> | null;
}): void => {
  if (!canvasRef || !canvasRef.current) return;
  const canvasWidth = canvasRef.current.width;

  const { location } = detectedQrCodeData;
  const { topLeftCorner, topRightCorner, bottomLeftCorner } = location;

  const box = {
    x: topLeftCorner.x,
    y: topLeftCorner.y,
    width: topRightCorner.x - topLeftCorner.x,
    height: bottomLeftCorner.y - topLeftCorner.y,
  };

  if (canvasContext) {
    canvasContext.font = '18px Arial';
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'blue';
  }

  canvasContext?.strokeRect(
    canvasWidth - box.x - box.width,
    box.y,
    box.width,
    box.height,
  );
  if (canvasContext) canvasContext.fillStyle = 'red';
  canvasContext?.fillText(
    detectedQrCodeData.data,
    canvasWidth - box.x - box.width,
    box.y,
  );
};

export default drawBox;
