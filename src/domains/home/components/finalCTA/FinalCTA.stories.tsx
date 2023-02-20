import React from 'react';
import { Story } from '@storybook/react';
import FinalCTA from './FinalCTA';

export default {
  title: 'splash/FinalCTA',
  component: FinalCTA,
};

const openContactModal = () => console.log('open sesame');
const Template: Story = (args) => (
  <FinalCTA {...args} openContactModal={openContactModal} />
);

export const Default = Template.bind({});
Default.args = {};
