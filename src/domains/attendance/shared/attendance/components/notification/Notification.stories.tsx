import React from 'react';
import { Story } from '@storybook/react';

import Notification from './Notification';

export default {
  title: 'Attendance/components/Attendance/components/Notification',
  component: Notification,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  children: string;
  type: 'error' | 'success';
}

const Template: Story<IArgs> = (args) => <Notification {...args} />;

export const Success = Template.bind({});
Success.args = {
  children: 'Face scanned successfully',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error, Please check in with teacher',
  type: 'error',
};
