import React from 'react';
import { Story } from '@storybook/react';
import LargeBracket from './LargeBrackets';

export default {
  title: 'Camera/LargeBracketsOverlay',
  component: LargeBracket,
};

interface IArgs {
  height: number;
  width: number;
}

const Template: Story<IArgs> = () => <LargeBracket />;

export const Default = Template.bind({});
Default.args = {};
