import React from 'react';
import { Story } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'splash/Hero',
  component: Hero,
};
const openContactModal = () => console.log('open sesame');
const Template: Story = (args) => (
  <Hero {...args} openContactModal={openContactModal} />
);

export const Default = Template.bind({});
Default.args = {};
