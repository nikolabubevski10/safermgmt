import * as faceapi from 'face-api.js';

let isLoaded = false;
const loadModel = async () => {
  try {
    // console.log('Loading face detection model...');
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    // console.log('Face detection model loaded.');
    isLoaded = true;
  } catch (e) {
    console.error(e);
  }
};

loadModel();

const options = new faceapi.TinyFaceDetectorOptions({
  inputSize: 160,
  scoreThreshold: 0.5,
});

export const detectFace = async (
  video: HTMLVideoElement,
): Promise<faceapi.FaceDetection[]> => {
  if (!isLoaded) return [];
  const detectedFaces = await faceapi.tinyFaceDetector(video, options);
  return detectedFaces;
};
