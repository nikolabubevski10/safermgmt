import React from 'react';
import { Story } from '@storybook/react';

import Heading from './Heading';

export default {
  title: 'Auth/components/Heading',
  component: Heading,
};

interface IArgs {
  align?: 'center' | 'left' | 'right';
  children: string;
}

const Template: Story<IArgs> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Log In',
};
