import React from 'react';
import { Story } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Attendance/components/Exit Modal/components/Input',
  component: Input,
};

interface IArgs {
  error?: string;
  label: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  type: 'email' | 'text' | 'password';
  value: string;
}

const Template: Story<IArgs> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  name: 'email',
  onChange: () => null,
  type: 'email',
  value: '',
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error text',
  label: 'Email',
  name: 'email',
  onChange: () => null,
  type: 'email',
  value: '',
};
