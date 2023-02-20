import React from 'react';
import { Story } from '@storybook/react';
import Surveys from './Surveys';

export default {
  title: 'splash/surveys/Surveys',
  component: Surveys,
};

const Template: Story = (args) => <Surveys {...args} />;

export const Default = Template.bind({});
Default.args = {};
