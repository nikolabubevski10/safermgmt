import React from 'react';
import { Story } from '@storybook/react';

import SecretPage from './SecretPage';

export default {
  title: 'Auth/Secret Page',
  component: SecretPage,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story = (args) => <SecretPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
