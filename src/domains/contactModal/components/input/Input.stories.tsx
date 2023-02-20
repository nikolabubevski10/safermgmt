import React from 'react';
import { Story } from '@storybook/react';

import Input, { Props } from './Input';

export default {
  title: 'Home/components/Contact Modal/components/Input',
  component: Input,
};

const Template: Story<Props> = (args) => <Input {...args} />;

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
