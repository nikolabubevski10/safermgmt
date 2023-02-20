import React from 'react';
import { Story } from '@storybook/react';
import HandDevice from './HandDevice';

export default {
  title: 'splash/HandDevice',
  component: HandDevice,
};

const Template: Story = (args) => <HandDevice {...args} />;

export const Default = Template.bind({});
Default.args = {};
