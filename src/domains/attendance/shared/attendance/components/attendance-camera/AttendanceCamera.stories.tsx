import React from 'react';
import { Story } from '@storybook/react';

import AttendanceCamera from './AttendanceCamera';

export default {
  title: 'Attendance/components/Attendance/components/Attendance Camera',
  component: AttendanceCamera,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  isScanInProgress: boolean;
  isSuccessful: boolean;
  onFaceScan?: (value: string) => void;
  onQrCodeScan?: (value: string) => void;
  shouldScanFaces?: boolean;
  shouldScanQrCodes?: boolean;
  shouldShowStatus: boolean;
}

const Template: Story<IArgs> = (args) => <AttendanceCamera {...args} />;

export const QrCodes = Template.bind({});
QrCodes.args = {
  isScanInProgress: false,
  isSuccessful: false,
  onFaceScan: () => undefined,
  onQrCodeScan: () => undefined,
  shouldScanFaces: false,
  shouldScanQrCodes: true,
  shouldShowStatus: false,
};

export const Faces = Template.bind({});
Faces.args = {
  isScanInProgress: false,
  isSuccessful: false,
  onFaceScan: () => undefined,
  onQrCodeScan: () => undefined,
  shouldScanFaces: true,
  shouldScanQrCodes: false,
  shouldShowStatus: false,
};

export const Success = Template.bind({});
Success.args = {
  isScanInProgress: false,
  isSuccessful: true,
  onFaceScan: () => undefined,
  onQrCodeScan: () => undefined,
  shouldScanFaces: false,
  shouldScanQrCodes: true,
  shouldShowStatus: true,
};

export const Error = Template.bind({});
Error.args = {
  isScanInProgress: false,
  isSuccessful: false,
  onFaceScan: () => undefined,
  onQrCodeScan: () => undefined,
  shouldScanFaces: false,
  shouldScanQrCodes: true,
  shouldShowStatus: true,
};
