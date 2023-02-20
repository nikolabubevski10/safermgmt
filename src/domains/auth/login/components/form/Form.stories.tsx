import React from 'react';
import { Story } from '@storybook/react';

import Form from './Form';

export default {
  title: 'Auth/Login/components/Form',
  component: Form,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  state: {
    resetPassword?: boolean;
  };
}

const Template: Story<IArgs> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
