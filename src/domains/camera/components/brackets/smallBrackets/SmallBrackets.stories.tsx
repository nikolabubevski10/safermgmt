import React from 'react';
import { Story } from '@storybook/react';
import SmallBrackets from './SmallBrackets';

export default {
  title: 'camera/SmallBracketsOverlay',
  component: SmallBrackets,
};

interface IArgs {
  height: number;
  width: number;
}

const Template: Story<IArgs> = () => <SmallBrackets />;

export const Default = Template.bind({});
Default.args = {};
