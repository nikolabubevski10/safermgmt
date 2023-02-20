import React from 'react';
import { Story } from '@storybook/react';
import Reports from './Reports';

export default {
  title: 'splash/Reports',
  component: Reports,
};

const Template: Story = (args) => <Reports {...args} />;

export const Default = Template.bind({});
Default.args = {};
