import React from 'react';
import { Story } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Organization/Profile Completion/components/Button',
  component: Button,
};

interface IArgs {
  children: string;
  onClick: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => void;
}

const Template: Story<IArgs> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Export report',
  onClick: () => null,
};
