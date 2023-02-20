import React from 'react';
import { Story } from '@storybook/react';
import ArrowButton from './ArrowButton';

export default {
  title: 'splash/ArrowButton',
  component: ArrowButton,
};
const onClick = () => console.log('i am clicked');
const Template: Story = (args) => <ArrowButton onClick={onClick} {...args} />;

export const Left = Template.bind({});
Left.args = { left: true };

export const Right = Template.bind({});
Right.args = { right: true };
