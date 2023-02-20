import React from 'react';
import { Story } from '@storybook/react';
import DataSync from './DataSync';

export default {
  title: 'splash/DataSync',
  component: DataSync,
};

const Template: Story = (args) => <DataSync {...args} />;

export const Default = Template.bind({});
Default.args = {};
