import React from 'react';
import { Story } from '@storybook/react';

import ReauthenticateForm from './ReauthenticateForm';

export default {
  title: 'Attendance/components/Exit Modal/components/Reauthenticate Form',
  component: ReauthenticateForm,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  isForgotPasswordSuccessful: boolean;
  onClose: () => void;
  setShouldShowForgotPasswordForm: () => void;
}

const Template: Story<IArgs> = (args) => <ReauthenticateForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  isForgotPasswordSuccessful: false,
  onClose: () => undefined,
  setShouldShowForgotPasswordForm: () => undefined,
};
