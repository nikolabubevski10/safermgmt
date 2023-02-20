import React from 'react';
import { Story } from '@storybook/react';

import Notification, { Props } from './Notification';

export default {
  title: 'Home/components/Contact Modal/components/Notification',
  component: Notification,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story<Props> = (args) => <Notification {...args} />;

export const Success = Template.bind({});
Success.args = {
  children: 'If you have an account, we’ll email you a reset link.',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  children: 'The email or password is incorrect',
  type: 'error',
};
