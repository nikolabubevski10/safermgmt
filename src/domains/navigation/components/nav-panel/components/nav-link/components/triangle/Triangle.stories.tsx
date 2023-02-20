import React from 'react';
import { Story } from '@storybook/react';
import Triangle from './Triangle';

export default {
  title: 'navigation/navPanel/Triangle',
  component: Triangle,
};

const Template: Story = (args) => <Triangle {...args} />;

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
