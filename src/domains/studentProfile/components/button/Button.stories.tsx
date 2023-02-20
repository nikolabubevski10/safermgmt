import React from 'react';
import { Story } from '@storybook/react';

import Button, { Props } from './Button';

export default {
  title: 'Home/components/Contact Modal/components/Button',
  component: Button,
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Exit',
  onClick: () => null,
};
