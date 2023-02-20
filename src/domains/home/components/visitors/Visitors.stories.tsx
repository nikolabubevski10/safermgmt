import React from 'react';
import { Story } from '@storybook/react';
import Visitors from './Visitors';

export default {
  title: 'splash/Visitors',
  component: Visitors,
};

const Template: Story = (args) => <Visitors {...args} />;

export const Default = Template.bind({});
Default.args = {};
