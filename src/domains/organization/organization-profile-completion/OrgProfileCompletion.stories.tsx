import React from 'react';
import { Story } from '@storybook/react';

import OrgProfileCompletion from './OrgProfileCompletion';

export default {
  title: 'Organization/Profile Completion',
  component: OrgProfileCompletion,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story = (args) => <OrgProfileCompletion {...args} />;

export const Default = Template.bind({});
Default.args = {};
