import React from 'react';
import { Story } from '@storybook/react';

import ResetPassword from './ResetPassword';

export default {
  title: 'Auth/Reset Password',
  component: ResetPassword,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story = (args) => <ResetPassword {...args} />;

export const Default = Template.bind({});
Default.args = {};
