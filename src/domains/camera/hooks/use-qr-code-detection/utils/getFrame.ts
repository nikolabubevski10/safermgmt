import { RefObject } from 'react';

const getFrame = ({
  canvasContext,
  canvasRef,
}: {
  canvasContext: CanvasRenderingContext2D | null;
  canvasRef: RefObject<HTMLCanvasElement> | null;
}): ImageData | undefined => {
  if (!canvasRef || !canvasRef.current) return;

  const frame = canvasContext?.getImageData(
    0,
    0,
    canvasRef.current.width,
    canvasRef.current.height,
  );

  return frame;
};

export default getFrame;
