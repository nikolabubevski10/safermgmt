import React from 'react';
import { Story } from '@storybook/react';

import ForgotPasswordForm from './ForgotPasswordForm';

export default {
  title: 'Attendance/components/Exit Modal/components/Forgot Password Form',
  component: ForgotPasswordForm,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  onClose: () => void;
  onSuccess: () => void;
  setShouldShowForgotPasswordForm: () => void;
}

const Template: Story<IArgs> = (args) => <ForgotPasswordForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClose: () => undefined,
  onSuccess: () => undefined,
  setShouldShowForgotPasswordForm: () => undefined,
};
