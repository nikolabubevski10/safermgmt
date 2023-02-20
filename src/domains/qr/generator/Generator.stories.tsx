import React from 'react';
import { Story } from '@storybook/react';

import Generator from './Generator';

export default {
  title: 'QR Code/Generator',
  component: Generator,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story = (args) => <Generator {...args} />;

export const Default = Template.bind({});
Default.args = {};
