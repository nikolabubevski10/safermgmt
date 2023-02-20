import React from 'react';
import { Story } from '@storybook/react';

import ForgotPassword from './ForgotPassword';

export default {
  title: 'Auth/Forgot Password',
  component: ForgotPassword,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story = (args) => <ForgotPassword {...args} />;

export const Default = Template.bind({});
Default.args = {};
