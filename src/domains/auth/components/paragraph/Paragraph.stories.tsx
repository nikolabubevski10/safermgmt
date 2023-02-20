import React from 'react';
import { Story } from '@storybook/react';

import Paragraph from './Paragraph';

export default {
  title: 'Auth/components/Paragraph',
  component: Paragraph,
};

interface IArgs {
  align?: 'center' | 'left' | 'right';
  children: string;
}

const Template: Story<IArgs> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Enter your details below',
};
