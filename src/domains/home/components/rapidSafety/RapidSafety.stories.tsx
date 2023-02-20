import React from 'react';
import { Story } from '@storybook/react';
import RapidSafety from './RapidSafety';

export default {
  title: 'splash/RapidSafety',
  component: RapidSafety,
};

const Template: Story = (args) => <RapidSafety {...args} />;

export const Default = Template.bind({});
Default.args = {};
