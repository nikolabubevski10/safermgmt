import React from 'react';
import { Story } from '@storybook/react';
import Testimonials from './Testimonials';

export default {
  title: 'splash/Testimonials',
  component: Testimonials,
};

const openContactModal = () => console.log('open sesame');
const Template: Story = (args) => (
  <Testimonials {...args} openContactModal={openContactModal} />
);

export const Default = Template.bind({});
Default.args = {};
