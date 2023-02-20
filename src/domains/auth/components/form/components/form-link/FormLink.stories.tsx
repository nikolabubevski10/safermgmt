import React from 'react';
import { Story } from '@storybook/react';

import FormLink from './FormLink';

export default {
  title: 'Auth/components/form/components/Form Link',
  component: FormLink,
};

interface IArgs {
  children: string;
  to: string;
}

const Template: Story<IArgs> = (args) => <FormLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Forgot password?',
  to: '#',
};
