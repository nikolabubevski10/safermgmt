import React from 'react';
import { Story } from '@storybook/react';

import FormLink from './FormLink';

export default {
  title: 'Attendance/components/Exit Modal/components/Form Link',
  component: FormLink,
};

interface IArgs {
  children: string;
  onClick: () => void;
}

const Template: Story<IArgs> = (args) => <FormLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Forgot password?',
  onClick: () => undefined,
};
