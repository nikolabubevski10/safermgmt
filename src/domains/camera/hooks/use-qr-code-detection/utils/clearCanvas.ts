import { RefObject } from 'react';

const clearCanvas = ({
  canvasContext,
  canvasRef,
}: {
  canvasContext: CanvasRenderingContext2D;
  canvasRef: RefObject<HTMLCanvasElement> | null;
}): void => {
  if (!canvasRef || !canvasRef.current) return;
  canvasContext?.clearRect(
    0,
    0,
    canvasRef.current.width,
    canvasRef.current.height,
  );
};

export default clearCanvas;
