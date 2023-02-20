import React from 'react';
import { Story } from '@storybook/react';

import Login from './Login';

export default {
  title: 'Auth/Login',
  component: Login,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
