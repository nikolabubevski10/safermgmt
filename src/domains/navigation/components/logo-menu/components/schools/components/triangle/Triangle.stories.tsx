import React from 'react';
import { Story } from '@storybook/react';
import Triangle from './Triangle';

export default {
  title: 'navigation/logoMenu/Triangle',
  component: Triangle,
};

const onClick = () => console.log('triangle clicked');

const Template: Story = (args) => <Triangle {...args} onClick={onClick} />;

export const Left = Template.bind({});
Left.args = {
  left: true,
};

export const Up = Template.bind({});
Up.args = {
  up: true,
};

export const Down = Template.bind({});
Down.args = {
  down: true,
};

export const Right = Template.bind({});
Right.args = {
  right: true,
};
