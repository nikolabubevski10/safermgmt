import React from 'react';
import { Story } from '@storybook/react';

import Logo from './Logo';

export default {
  title: 'Attendance/components/Header/components/Logo',
  component: Logo,
  parameters: { controls: { sort: 'alpha' } },
};

interface IArgs {
  large: boolean;
}

const Template: Story<IArgs> = (args) => <Logo {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  large: true,
};

export const Mobile = Template.bind({});
Mobile.args = {
  large: false,
};
