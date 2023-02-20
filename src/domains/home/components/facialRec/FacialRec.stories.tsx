import React from 'react';
import { Story } from '@storybook/react';
import FacialRec from './FacialRec';

export default {
  title: 'splash/FacialRec',
  component: FacialRec,
};

const Template: Story = (args) => <FacialRec {...args} />;

export const Default = Template.bind({});
Default.args = {};
