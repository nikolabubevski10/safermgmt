import React from 'react';
import { Story } from '@storybook/react';

import Scanner from './Scanner';

export default {
  title: 'QR Code/Scanner',
  component: Scanner,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story = (args) => <Scanner {...args} />;

export const Default = Template.bind({});
Default.args = {};
