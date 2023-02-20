import React from 'react';
import { Story } from '@storybook/react';

import Notification from './Notification';

export default {
  title: 'Auth/components/form/components/Notification',
  component: Notification,
};

interface IArgs {
  children: string;
  type: 'error' | 'success';
}

const Template: Story<IArgs> = (args) => <Notification {...args} />;

export const Error = Template.bind({});
Error.args = {
  children: 'The email or password is incorrect',
  type: 'error',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Your password was successfully updated',
  type: 'success',
};
