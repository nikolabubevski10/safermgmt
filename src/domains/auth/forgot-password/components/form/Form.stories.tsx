import React from 'react';
import { Story } from '@storybook/react';

import Form from './Form';

export default {
  title: 'Auth/Forgot Password/components/Form',
  component: Form,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
