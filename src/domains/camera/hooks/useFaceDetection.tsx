import { LegacyRef, RefObject, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

import * as worker from './face-detection/face-detect.worker';

type CanvasRef = HTMLCanvasElement | null;
type WebcamRef = Webcam | null;

interface IUseFaceDetectionProps {
  canvasRef: RefObject<CanvasRef>;
  isCameraOn: boolean;
  onFaceScan: (value: string) => void;
  shouldDrawBoxForFace: boolean;
  shouldScanFaces: boolean;
  webcamRef: LegacyRef<WebcamRef>;
}

const useFaceDetection = ({
  canvasRef,
  isCameraOn,
  onFaceScan,
  shouldDrawBoxForFace,
  shouldScanFaces,
  webcamRef,
}: IUseFaceDetectionProps): void => {
  const [faceValue, setFaceValue] = useState<string | null>(null);
  const [shouldScan, setShouldScan] = useState(shouldScanFaces);

  useEffect(() => {
    setShouldScan(shouldScanFaces);
  }, [shouldScanFaces]);

  useEffect(() => {
    if (!shouldScan) {
      return;
    }

    if (!webcamRef || !isCameraOn || !canvasRef) {
      return;
    }

    const webcamEl = (webcamRef as RefObject<Webcam>).current;
    const canvasEl = (canvasRef as RefObject<HTMLCanvasElement>).current;

    if (!webcamEl || !canvasEl) {
      return;
    }

    const { video } = webcamEl;

    if (!video) {
      return;
    }

    const clearCanvas = () => {
      const context = canvasEl.getContext('2d');
      if (!context) {
        return;
      }
      context.clearRect(0, 0, canvasEl.width, canvasEl.height);
    };

    const drawBox = (rawBox: faceapi.IRect) => {
      const box = {
        y: rawBox.y,
        x: canvasEl.width / 2 - rawBox.x,
        width: rawBox.width,
        height: rawBox.height,
      };
      const label = new faceapi.draw.DrawBox(box, {
        label: 'Name goes here',
        lineWidth: 2,
      });
      label.draw(canvasEl);
    };

    const detectFace = async () => {
      const detectedFaces = await worker.detectFace(video);

      if (!detectedFaces) {
        return;
      }

      clearCanvas();

      if (shouldDrawBoxForFace) {
        detectedFaces.forEach(({ box }: { box: faceapi.IRect }) =>
          drawBox(box),
        );
      }

      // TODO: handle recoginition to make personId dynamic
      if (detectedFaces.length) {
        const detectedFacePersonId = 'fb3172fa-8705-4de3-a2b7-7054a9a9d255';
        // TODO: need to add additional logic to determine if is a duplicate within timeframe because if the last scanned face is the same as the newest one, it won't perform scan function
        if (detectedFacePersonId !== faceValue) {
          setFaceValue(detectedFacePersonId);
        }
      }
    };

    const faceDetectInterval = window.setInterval(() => {
      detectFace();
    }, 120);

    return () => {
      window.clearInterval(faceDetectInterval);
    };
  }, [shouldScan, canvasRef, webcamRef, isCameraOn]);

  useEffect(() => {
    if (faceValue) {
      onFaceScan(faceValue);
    }
  }, [faceValue]);
};

export default useFaceDetection;
