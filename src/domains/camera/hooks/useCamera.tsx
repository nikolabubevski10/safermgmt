import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

interface IUseCamera {
  handleFakeCapture: () => void;
  isCameraOn: boolean;
  isLoading: boolean;
  photo: string | null;
  setIsCameraOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPhoto: React.Dispatch<React.SetStateAction<string | null>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
  turnOnCamera: () => void;
  retakePhoto: () => void;
  takePhoto: () => void;
  webcamRef: React.RefObject<Webcam>;
}

function useCamera(): IUseCamera {
  const webcamRef = useRef<Webcam>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleFakeCapture = useCallback(() => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setPhoto(null);
          setIsCameraOn(false);
        }, 3000);
      }, 2000);
    }
  }, [webcamRef]);

  const takePhoto = () => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      return setPhoto(imageSrc);
    }
  };

  const turnOnCamera = () => setIsCameraOn(true);
  const retakePhoto = () => setPhoto(null);

  return {
    handleFakeCapture,
    isCameraOn,
    isLoading,
    photo,
    retakePhoto,
    setIsCameraOn,
    setIsLoading,
    setPhoto,
    setSuccess,
    success,
    takePhoto,
    turnOnCamera,
    webcamRef,
  };
}

export default useCamera;
