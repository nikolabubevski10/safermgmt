import React from 'react';
import { Story } from '@storybook/react';

import ExitIcon from './ExitIcon';

export default {
  title: 'Attendance/components/Header/components/Exit Icon',
  component: ExitIcon,
  parameters: { controls: { sort: 'alpha' } },
};

const Template: Story = (args) => <ExitIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
