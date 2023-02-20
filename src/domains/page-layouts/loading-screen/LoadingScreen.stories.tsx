import React from 'react';
import { Story } from '@storybook/react';

import LoadingScreen from './LoadingScreen';

export default {
  title: 'Page Layouts/Loading Screen',
  component: LoadingScreen,
};

const Template: Story = (args) => <LoadingScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
};
