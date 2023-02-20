import { RefObject } from 'react';
import Webcam from 'react-webcam';

const drawImage = ({
  canvasContext,
  webcamRef,
}: {
  canvasContext: CanvasRenderingContext2D;
  webcamRef: RefObject<Webcam> | null;
}): void => {
  if (!webcamRef || !webcamRef.current) return;

  const { video } = webcamRef.current;

  if (!video) return;

  canvasContext?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
};

export default drawImage;
