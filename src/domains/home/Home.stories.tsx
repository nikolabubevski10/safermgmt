import React from 'react';
import { Story } from '@storybook/react';
import Home from './Home';

export default {
  title: 'splash/Home',
  component: Home,
};

const Template: Story = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
