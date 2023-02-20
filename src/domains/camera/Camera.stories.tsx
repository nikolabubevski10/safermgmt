import React, { LegacyRef } from 'react';
import Webcam from 'react-webcam';
import { Story } from '@storybook/react';

import Camera from './Camera';

export default {
  title: 'Camera/Camera',
  component: Camera,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  webcamRef: LegacyRef<Webcam>;
  width: number;
  height: number;
  photo: string | null;
  handleUserMedia: () => void;
  onClick: () => void;
  isCameraOn: boolean;
  shouldScanFaces?: boolean;
  shouldScanQrCodes?: boolean;
  isLoading: boolean;
}

const Template: Story<IArgs> = (args) => <Camera {...args} />;

export const NoPhotoPresentWithCameraOff = Template.bind({});
NoPhotoPresentWithCameraOff.args = {
  // webcamRef: this,
  width: 250,
  height: 250,
  photo: null,
  handleUserMedia: () => undefined,
  onClick: () => undefined,
  isCameraOn: false,
  isLoading: false,
};

export const NoPhotoPresentWithCameraOn = Template.bind({});
NoPhotoPresentWithCameraOn.args = {
  // webcamRef: this,
  width: 250,
  height: 250,
  photo: null,
  handleUserMedia: () => undefined,
  onClick: () => undefined,
  isCameraOn: true,
  isLoading: false,
};

export const PhotoPresent = Template.bind({});
PhotoPresent.args = {
  // webcamRef: this,
  width: 250,
  height: 250,
  photo:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&crop=faces,top&w=250&h=250&q=60',
  handleUserMedia: () => undefined,
  onClick: () => undefined,
  isCameraOn: false,
  isLoading: false,
};
